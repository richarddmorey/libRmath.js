# libRmath.js
Javascript ( TypeScript ) Pure Implementation of Statistical R "core" numerical libRmath.so library found here
https://svn.r-project.org/R/trunk/src/nmath/




## Progress (DONE and TODO)


Work in progress (see list below of all c modules that need to be ported), please considering helping out and bring R core functionality 
to Javascript.

I first list the modules __DONE__ so far, lets start at a positive note)

### DONE

| original c module | js/ts module name | port date | R - base functions |
|------------------|--------------------|-------------|--------------------|
|sexp.c           | ./sexp.ts| 8-feb-2017 | (Random variates from the standard exponential distribution) exp_rand (internally used) function  |
|dunif.c           | ./dunif.ts| 8-feb-2017 | R "dunif" function  |
|bessel_k.c           | ./bessel_k.ts| 8-feb-2017 | R "besselK" function http://www.netlib.org/specfun/rkbesl |
|runif.c           | ./runif.ts| 4-feb-2017 | implemented 3 RNG and native browser/node agnostic 64 RNG map to floating number |
|bd0.c           | ./lib/bd0.ts |23-jan-2017 | hidden, used by modules dbinom.c ,dpois.c dt.c |  
|beta.c           |./lib/beta.ts  | 23-jan-2017 | [beta](https://en.wikipedia.org/wiki/Beta_function) |
|chebyshev.c           | ./lib/chebyshev.ts | 23-jan-2017 | chebyshev\_init , chebyshev\_eval |
|cospi.c           | ./lib/cospi.ts | 23-jan-2017 | cospi, sinpi, tanpi |
|gamma.c           |./lib/gamma.ts | 23-jan-2017 | [gammafn] gamme function(https://en.wikipedia.org/wiki/Gamma_function) |
|lgamma.c           | ./lib/lgamma.ts | 23-jan-2017 | logarithmic gamma [lgammafn](https://en.wikipedia.org/wiki/Gamma_function) |
|lgammacor.c           |./lib/lgammecor.ts  | 23-jan-2017 | lgammacor |
|stirlerr.c           | ./lib/stirlerr | 23-jan-2017 | Computes the log of the error term in Stirling's formula ( _stirlerr_ ) |


### TODO

| original c module | ported to javascript? | tested | R - base functions |
|------------------|--------------------|-------------|--------------------|
bd0.c           | done ./lib/bd0.ts | no | hidden, used by modules dbinom.c ,dpois.c dt.c |       
bessel_i.c           | TODO  |  | |
bessel_j.c           | TODO | | |
bessel_k.c           | done | no | R "besselK" function http://www.netlib.org/specfun/rkbesl |
bessel_y.c           | TODO | | |
beta.c           |done ./lib/beta.ts  | no | [beta](https://en.wikipedia.org/wiki/Beta_function) |
chebyshev.c           | done ./lib/chebyshev.ts | no | chebyshev\_init , chebyshev\_eval |
choose.c           |TODO | | |
cospi.c           | done ./lib/cospi.ts | no| cospi, sinpi, tanpi |
d1mach.c           |TODO | | |
dbeta.c           |  TODO |  | |
dbinom.c           | TODO| | |
dcauchy.c           | TODO| | |
dchisq.c           | TODO| | |
dexp.c           |TODO | | |
df.c           | TODO| | |
dgamma.c           | TODO| | |
dgeom.c           |TODO | | |
dhyper.c           |TODO | | |
dlnorm.c           |TODO | | |
dlogis.c           | TODO| | |
dnbeta.c           |TODO | | |
dnbinom.c           |TODO | | |
dnchisq.c           |TODO | | |
dnf.c           |TODO | | |
dnorm.c           |TODO | | |
dnt.c           |TODO | | |
dpois.c           | TODO| | |
dt.c           |TODO | | |
dunif.c           | done| no | R "dunif" function  |
dweibull.c           | TODO| | |
expm1.c           |TODO | | |
fmax2.c           |TODO | | |
fmin2.c           | TODO| | |
fprec.c           |TODO | | |
fround.c           |TODO | | |
fsign.c           |TODO | | |
ftrunc.c           | TODO| | |
gamma.c           |done  ./lib/gamma.ts | no | [gammafn](https://en.wikipedia.org/wiki/Gamma_function) |
gamma_cody.c           | TODO| | |
gammalims.c           |TODO | | |
i1mach.c           |TODO | | |
imax2.c           |TODO | | |
imin2.c           | TODO| | |
lbeta.c           | TODO| | |
lgamma.c           | done ./lib/lgamma.ts | no | logarithmic gamma [lgammafn](https://en.wikipedia.org/wiki/Gamma_function) |
lgammacor.c           |done ./lib/lgammecor.ts  | no | lgammacor |
log1p.c           |TODO | | |
mlutils.c           |TODO | | |
pbeta.c           |TODO | | |
pbinom.c           |TODO | | |
pcauchy.c           | TODO| | |
pchisq.c           | TODO| | |
pexp.c           | TODO| | |
pf.c           |TODO | | |
pgamma.c           |TODO | | |
pgeom.c           | TODO| | |
phyper.c           |TODO | | |
plnorm.c           | TODO| | |
plogis.c           | TODO| | |
pnbeta.c           |TODO | | |
pnbinom.c           | TODO| | |
pnchisq.c           | TODO| | |
pnf.c           |TODO | | |
pnorm.c           | TODO| | |
pnt.c           | TODO| | |
polygamma.c           | TODO| | |
ppois.c           | TODO| | |
pt.c           |TODO | | |
ptukey.c           | TODO| | |
punif.c           | TODO| | |
pweibull.c           |TODO | | |
qbeta.c           | TODO| | |
qbinom.c           | TODO| | |
qcauchy.c           | TODO| | |
qchisq.c           |TODO | | |
qexp.c           |TODO | | |
qf.c           |TODO | | |
qgamma.c           |TODO | | |
qgeom.c           |TODO | | |
qhyper.c           | TODO| | |
qlnorm.c           | TODO| | |
qlogis.c           | TODO| | |
qnbeta.c           | TODO| | |
qnbinom.c           | TODO| | |
qnchisq.c           |TODO | | |
qnf.c           |TODO | | |
qnorm.c           | TODO| | |
qnt.c           | TODO| | |
qpois.c                           |TODO | | |                                                                                               
qt.c           |TODO | | |
qtukey.c           |TODO | | |
qunif.c           | TODO| | |
qweibull.c           | TODO| | |
rbeta.c           | TODO| | |
rbinom.c           |TODO | | |
rcauchy.c           |TODO | | |
rchisq.c           |TODO | | |
rexp.c           |TODO | | |
rf.c           | TODO| | |
rgamma.c           |TODO | | |
rgeom.c           |TODO | | |
rhyper.c           | TODO| | |
rlnorm.c           |TODO | | |
rlogis.c           | TODO| | |
rmultinom.c           | TODO| | |
rnbinom.c           |TODO | | |
rnchisq.c           | TODO| | |
rnorm.c           |TODO | | |
rpois.c           | TODO| | |
rt.c           | TODO| | |
runif.c           | done| no | implemented 3 RNG and native browser/node agnostic 64 RNG map to floating number |
rweibull.c           | TODO| | |
sexp.c           | done | no  | (Random variates from the standard exponential distribution) exp_rand (internally used) function  |
sign.c           | TODO| | |
signrank.c           | TODO| | |
snorm.c           | TODO| | |
stirlerr.c           | done ./lib/stirlerr | no | Computes the log of the error term in Stirling's formula ( _stirlerr_ ) |
toms708.c           |TODO | | |
wilcox.c           | TODO| | |

