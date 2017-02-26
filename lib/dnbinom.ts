/*
 *  AUTHOR
 *  Jacob Bogers, jkfbogers@gmail.com
 *  feb 25, 2017
 * 
 *  ORIGNINAL AUTHOR
 *    Catherine Loader, catherine@research.bell-labs.com.
 *    October 23, 2000 and Feb, 2001.
 *
 *    dnbinom_mu(): Martin Maechler, June 2008
 *
 *  Merge in to R:
 *	Copyright (C) 2000--2014, The R Core Team
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, a copy is available at
 *  https://www.R-project.org/Licenses/
 *
 *
 * DESCRIPTION
 *
 *   Computes the negative binomial distribution. For integer n,
 *   this is probability of x failures before the nth success in a
 *   sequence of Bernoulli trials. We do not enforce integer n, since
 *   the distribution is well defined for non-integers,
 *   and this can be useful for e.g. overdispersed discrete survival times.
 */

import {
    ISNAN,
    ML_ERR_return_NAN,
    R_D_nonint_check,
    R_FINITE,
    R_D__0,
    R_D__1,
    R_forceint,
    log,
    R_D_exp,


} from './_general';

import { dbinom_raw } from './dbinom';

import { log1p } from './log1p';

import { lgamma_c99 } from './c99_gamma';


export function dnbinom(x: number, size: number, prob: number, give_log: boolean): number {

    let ans: number;
    let p: number;

    if (ISNAN(x) || ISNAN(size) || ISNAN(prob)) {
        return x + size + prob;
    }

    if (prob <= 0 || prob > 1 || size < 0) {
        return ML_ERR_return_NAN();
    }
    let rc = R_D_nonint_check(give_log, x);
    if (rc !== undefined) {
        return rc;
    }

    if (x < 0 || !R_FINITE(x)) {
        return R_D__0(give_log);
    }
    /* limiting case as size approaches zero is point mass at zero */
    if (x === 0 && size === 0) {
        return R_D__1(give_log);
    }

    x = R_forceint(x);

    ans = dbinom_raw(size, x + size, prob, 1 - prob, give_log);

    p = (size) / (size + x);

    return ((give_log) ? log(p) + ans : p * ans);
}

export function dnbinom_mu(x: number, size: number, mu: number, give_log: boolean) {
    /* originally, just set  prob :=  size / (size + mu)  and called dbinom_raw(),
     * but that suffers from cancellation when   mu << size  */
    let ans: number;
    let p: number;

    if (ISNAN(x) || ISNAN(size) || ISNAN(mu)) {
        return x + size + mu;
    }

    if (mu < 0 || size < 0) {
        return ML_ERR_return_NAN();
    }

    let rc = R_D_nonint_check(give_log, x);
    if (rc !== undefined) {
        return rc;
    }

    if (x < 0 || !R_FINITE(x)) {
        return R_D__0(give_log);
    }

    /* limiting case as size approaches zero is point mass at zero,
     * even if mu is kept constant. limit distribution does not
     * have mean mu, though.
     */
    if (x === 0 && size === 0) {
        return R_D__1(give_log);
    }

    x = R_forceint(x);
    if (x === 0) {/* be accurate, both for n << mu, and n >> mu :*/
        // old code   size * (size < mu ? log(size / (size + mu)) : log1p(- mu / (size + mu))));
        let llogx: number;
        if (size < mu) {
            llogx = log(size / (size + mu));
        }
        else {
            llogx = log1p(- mu / (size + mu));
        }
        return R_D_exp(give_log, size * llogx);
    }
    if (x < 1e-10 * size) { /* don't use dbinom_raw() but MM's formula: */
        /* FIXME --- 1e-8 shows problem; rather use algdiv() from ./toms708.c */
        p = (size < mu ? log(size / (1 + size / mu)) : log(mu / (1 + mu / size)));
        return R_D_exp(give_log, x * p - mu - lgamma_c99(x + 1) +
            log1p(x * (x - 1) / (2 * size)));
    }
    /* else: no unnecessary cancellation inside dbinom_raw, when
     * x_ = size and n_ = x+size are so close that n_ - x_ loses accuracy
     */
    ans = dbinom_raw(size, x + size, size / (size + mu), mu / (size + mu), give_log);
    p = (size) / (size + x);
    return ((give_log) ? log(p) + ans : p * ans);
}
