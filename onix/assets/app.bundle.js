var Qm=0,Nf=1,eg=2;var sl=1,tg=2,Zo=3,Vi=0,yn=1,Ai=2,or=0,Is=1,ol=2,Uf=3,Of=4,ng=5;var es=100,ig=101,rg=102,sg=103,og=104,ag=200,lg=201,cg=202,ug=203,Rc=204,Cc=205,hg=206,fg=207,dg=208,pg=209,mg=210,gg=211,_g=212,xg=213,vg=214,Pc=0,Ic=1,Lc=2,Ls=3,Dc=4,Nc=5,Uc=6,Oc=7,tu=0,yg=1,Mg=2,Hi=0,Ff=1,Bf=2,kf=3,al=4,zf=5,Vf=6,Gf=7,Mf="attached",Sg="detached",Hf=300,ls=301,Gs=302,nu=303,iu=304,ll=306,er=1e3,Ei=1001,Lo=1002,Jt=1003,ru=1004;var Hs=1005;var $t=1006,Ko=1007;var Wi=1008;var ti=1009,Wf=1010,Xf=1011,Jo=1012,su=1013,Xi=1014,di=1015,ar=1016,ou=1017,au=1018,$o=1020,qf=35902,Yf=35899,Zf=1021,Kf=1022,pi=1023,tr=1026,cs=1027,lu=1028,cu=1029,us=1030,uu=1031;var hu=1033,cl=33776,ul=33777,hl=33778,fl=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,_u=37492,xu=37496,vu=37488,yu=37489,dl=37490,Mu=37491,Su=37808,bu=37809,Tu=37810,wu=37811,Eu=37812,Au=37813,Ru=37814,Cu=37815,Pu=37816,Iu=37817,Lu=37818,Du=37819,Nu=37820,Uu=37821,Ou=36492,Fu=36494,Bu=36495,ku=36283,zu=36284,pl=36285,Vu=36286;var Ds=2300,Ns=2301,Ac=2302,Sf=2303,bf=2400,Tf=2401,wf=2402,bg=2500;var Jf=0,ml=1,jo=2,Tg=3200;var gl=0,wg=1,Lr="",Kt="srgb",kn="srgb-linear",Ba="linear",mt="srgb";var Cs=7680;var Ef=519,Eg=512,Ag=513,Rg=514,Gu=515,Cg=516,Pg=517,Hu=518,Ig=519,Fc=35044;var $f="300 es",ki=2e3,Do=2001;function Ax(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Rx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function No(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lg(){let r=No("canvas");return r.style.display="block",r}var _m={},Uo=null;function ka(...r){let e="THREE."+r.shift();Uo?Uo("log",e,...r):console.log(e,...r)}function Dg(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Pe(...r){r=Dg(r);let e="THREE."+r.shift();if(Uo)Uo("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=Dg(r);let e="THREE."+r.shift();if(Uo)Uo("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ps(...r){let e=r.join(" ");e in _m||(_m[e]=!0,Pe(...r))}function Ng(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Ug={[Pc]:Ic,[Lc]:Uc,[Dc]:Oc,[Ls]:Nc,[Ic]:Pc,[Uc]:Lc,[Oc]:Dc,[Nc]:Ls},nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=1234567,Oa=Math.PI/180,Us=180/Math.PI;function zi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function jf(r,e){return(r%e+e)%e}function Cx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Px(r,e,t){return r!==e?(t-r)/(e-r):0}function Fa(r,e,t){return(1-t)*r+t*e}function Ix(r,e,t,n){return Fa(r,e,1-Math.exp(-t*n))}function Lx(r,e=1){return e-Math.abs(jf(r,e*2)-e)}function Dx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ux(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ox(r,e){return r+Math.random()*(e-r)}function Fx(r){return r*(.5-Math.random())}function Bx(r){r!==void 0&&(xm=r);let e=xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kx(r){return r*Oa}function zx(r){return r*Us}function Vx(r){return(r&r-1)===0&&r!==0}function Gx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wx(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ws={DEG2RAD:Oa,RAD2DEG:Us,generateUUID:zi,clamp:ct,euclideanModulo:jf,mapLinear:Cx,inverseLerp:Px,lerp:Fa,damp:Ix,pingpong:Lx,smoothstep:Dx,smootherstep:Nx,randInt:Ux,randFloat:Ox,randFloatSpread:Fx,seededRandom:Bx,degToRad:kx,radToDeg:zx,isPowerOfTwo:Vx,ceilPowerOfTwo:Gx,floorPowerOfTwo:Hx,setQuaternionFromProperEuler:Wx,normalize:xt,denormalize:Bi},je=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ui=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==m){let p=l*h+c*d+u*m+f*_;p<0&&(h=-h,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A,l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+_*a;let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-a*d,e[t+2]=c*m+u*d+a*h-l*f,e[t+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zh=new k,vm=new ui,Ze=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],M=i[1],A=i[4],y=i[7],S=i[2],E=i[5],T=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*p+a*A+l*E,s[6]=o*g+a*y+l*T,s[1]=c*_+u*M+f*S,s[4]=c*p+u*A+f*E,s[7]=c*g+u*y+f*T,s[2]=h*_+d*M+m*S,s[5]=h*p+d*A+m*E,s[8]=h*g+d*y+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kh=new Ze,ym=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xx(){let r={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Io(i.r),i.g=Io(i.g),i.b=Io(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Lr?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[kn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}var tt=Xx();function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var _o,Bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_o===void 0&&(_o=No("canvas")),_o.width=e.width,_o.height=e.height;let i=_o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_o}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=No("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qx=0,Oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Jh(i[o].image)):s.push(Jh(i[o]))}else s=Jh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Jh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Yx=0,$h=new k,ln=class r extends nr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Ei,i=Ei,s=$t,o=Wi,a=pi,l=ti,c=r.DEFAULT_ANISOTROPY,u=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=zi(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Hf;ln.DEFAULT_ANISOTROPY=1;var vt=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(d+1)/2,S=(g+1)/2,E=(u+h)/4,T=(f+_)/4,x=(m+p)/4;return A>y&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=E/n,s=T/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kc=class extends nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new ln(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Oo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,m,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Kx)}lookAt(e,t,n){let i=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Yr.crossVectors(n,li),Yr.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Yr.crossVectors(n,li)),Yr.normalize(),tc.crossVectors(li,Yr),i[0]=Yr.x,i[4]=tc.x,i[8]=li.x,i[1]=Yr.y,i[5]=tc.y,i[9]=li.y,i[2]=Yr.z,i[6]=tc.z,i[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],A=n[7],y=n[11],S=n[15],E=i[0],T=i[4],x=i[8],b=i[12],R=i[1],I=i[5],P=i[9],H=i[13],z=i[2],U=i[6],V=i[10],O=i[14],Z=i[3],ee=i[7],L=i[11],le=i[15];return s[0]=o*E+a*R+l*z+c*Z,s[4]=o*T+a*I+l*U+c*ee,s[8]=o*x+a*P+l*V+c*L,s[12]=o*b+a*H+l*O+c*le,s[1]=u*E+f*R+h*z+d*Z,s[5]=u*T+f*I+h*U+d*ee,s[9]=u*x+f*P+h*V+d*L,s[13]=u*b+f*H+h*O+d*le,s[2]=m*E+_*R+p*z+g*Z,s[6]=m*T+_*I+p*U+g*ee,s[10]=m*x+_*P+p*V+g*L,s[14]=m*b+_*H+p*O+g*le,s[3]=M*E+A*R+y*z+S*Z,s[7]=M*T+A*I+y*U+S*ee,s[11]=M*x+A*P+y*V+S*L,s[15]=M*b+A*H+y*O+S*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],M=l*d-c*h,A=a*d-c*f,y=a*h-l*f,S=o*d-c*u,E=o*h-l*u,T=o*f-a*u;return t*(_*M-p*A+g*y)-n*(m*M-p*S+g*E)+i*(m*A-_*S+g*T)-s*(m*y-_*E+p*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],M=t*a-n*o,A=t*l-i*o,y=t*c-s*o,S=n*l-i*a,E=n*c-s*a,T=i*c-s*l,x=u*_-f*m,b=u*p-h*m,R=u*g-d*m,I=f*p-h*_,P=f*g-d*_,H=h*g-d*p,z=M*H-A*P+y*I+S*R-E*b+T*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/z;return e[0]=(a*H-l*P+c*I)*U,e[1]=(i*P-n*H-s*I)*U,e[2]=(_*T-p*E+g*S)*U,e[3]=(h*E-f*T-d*S)*U,e[4]=(l*R-o*H-c*b)*U,e[5]=(t*H-i*R+s*b)*U,e[6]=(p*y-m*T-g*A)*U,e[7]=(u*T-h*y+d*A)*U,e[8]=(o*P-a*R+c*x)*U,e[9]=(n*R-t*P-s*x)*U,e[10]=(m*E-_*y+g*M)*U,e[11]=(f*y-u*E-d*M)*U,e[12]=(a*b-o*I-l*x)*U,e[13]=(t*I-n*b+i*x)*U,e[14]=(_*A-m*S-p*M)*U,e[15]=(u*S-f*A+h*M)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,m=s*f,_=o*u,p=o*f,g=a*f,M=l*c,A=l*u,y=l*f,S=n.x,E=n.y,T=n.z;return i[0]=(1-(_+g))*S,i[1]=(d+y)*S,i[2]=(m-A)*S,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(h+g))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+A)*T,i[9]=(p-M)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=xo.set(i[0],i[1],i[2]).length(),a=xo.set(i[4],i[5],i[6]).length(),l=xo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ui.copy(this);let c=1/o,u=1/a,f=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,t.setFromRotationMatrix(Ui),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=ki,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===ki)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Do)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ki,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===ki)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Do)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xo=new k,Ui=new $e,Zx=new k(0,0,0),Kx=new k(1,1,1),Yr=new k,tc=new k,li=new k,Sm=new $e,bm=new ui,ir=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ir.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jx=0,Tm=new k,vo=new ui,xr=new $e,nc=new k,Ra=new k,$x=new k,jx=new ui,wm=new k(1,0,0),Em=new k(0,1,0),Am=new k(0,0,1),Rm={type:"added"},Qx={type:"removed"},yo={type:"childadded",child:null},jh={type:"childremoved",child:null},Nt=class r extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new k,t=new ir,n=new ui,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ze}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nc.copy(e):nc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Ra,nc,this.up):xr.lookAt(nc,Ra,this.up),this.quaternion.setFromRotationMatrix(xr),i&&(xr.extractRotation(i.matrixWorld),vo.setFromRotationMatrix(xr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),yo.child=e,this.dispatchEvent(yo),yo.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qx),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Qh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=jf(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qh(o,s,e+1/3),this.g=Qh(o,s,e),this.b=Qh(o,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Og[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return tt.workingToColorSpace(An.copy(this),e),Math.round(ct(An.r*255,0,255))*65536+Math.round(ct(An.g*255,0,255))*256+Math.round(ct(An.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(An.copy(this),t);let n=An.r,i=An.g,s=An.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Kt){tt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,i=An.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(ic);let n=Fa(Zr.h,ic.h,t),i=Fa(Zr.s,ic.s,t),s=Fa(Zr.l,ic.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Be;Be.NAMES=Og;var Os=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Oi=new k,vr=new k,ef=new k,yr=new k,Mo=new k,So=new k,Cm=new k,tf=new k,nf=new k,rf=new k,sf=new vt,of=new vt,af=new vt,Qr=class r{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Oi.subVectors(i,t),vr.subVectors(n,t),ef.subVectors(e,t);let o=Oi.dot(Oi),a=Oi.dot(vr),l=Oi.dot(ef),c=vr.dot(vr),u=vr.dot(ef),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yr.x),l.addScaledVector(o,yr.y),l.addScaledVector(a,yr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,n),af.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(sf,s.x),o.addScaledVector(of,s.y),o.addScaledVector(af,s.z),o}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),vr.subVectors(e,t),Oi.cross(vr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Oi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Mo.subVectors(i,n),So.subVectors(s,n),tf.subVectors(e,n);let l=Mo.dot(tf),c=So.dot(tf);if(l<=0&&c<=0)return t.copy(n);nf.subVectors(e,i);let u=Mo.dot(nf),f=So.dot(nf);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Mo,o);rf.subVectors(e,s);let d=Mo.dot(rf),m=So.dot(rf);if(m>=0&&d<=m)return t.copy(s);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(So,a);let p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return Cm.subVectors(s,i),a=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(Cm,a);let g=1/(p+_+h);return o=_*g,a=h*g,t.copy(n).addScaledVector(Mo,o).addScaledVector(So,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rc.copy(n.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),sc.subVectors(this.max,Ca),bo.subVectors(e.a,Ca),To.subVectors(e.b,Ca),wo.subVectors(e.c,Ca),Kr.subVectors(To,bo),Jr.subVectors(wo,To),ws.subVectors(bo,wo);let t=[0,-Kr.z,Kr.y,0,-Jr.z,Jr.y,0,-ws.z,ws.y,Kr.z,0,-Kr.x,Jr.z,0,-Jr.x,ws.z,0,-ws.x,-Kr.y,Kr.x,0,-Jr.y,Jr.x,0,-ws.y,ws.x,0];return!lf(t,bo,To,wo,sc)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,bo,To,wo,sc))?!1:(oc.crossVectors(Kr,Jr),t=[oc.x,oc.y,oc.z],lf(t,bo,To,wo,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mr=[new k,new k,new k,new k,new k,new k,new k,new k],Fi=new k,rc=new zn,bo=new k,To=new k,wo=new k,Kr=new k,Jr=new k,ws=new k,Ca=new k,sc=new k,oc=new k,Es=new k;function lf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Es.fromArray(r,s);let a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),u=n.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nn=new k,ac=new je,tv=0,Gt=class extends nr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ha=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gn=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},nv=new zn,Pa=new k,cf=new k,$n=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(cf)),this.expandByPoint(Pa.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},iv=0,wi=new $e,uf=new Nt,Eo=new k,ci=new zn,Ia=new zn,mn=new k,_n=class r extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Ha:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ci.min,Ia.min),ci.expandByPoint(mn),mn.addVectors(ci.max,Ia.max),ci.expandByPoint(mn)):(ci.expandByPoint(Ia.min),ci.expandByPoint(Ia.max))}ci.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(e,c),mn.add(Eo)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new k,l[x]=new k;let c=new k,u=new k,f=new k,h=new je,d=new je,m=new je,_=new k,p=new k;function g(x,b,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),u.sub(c),f.sub(c),d.sub(h),m.sub(h);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),a[x].add(_),a[b].add(_),a[R].add(_),l[x].add(p),l[b].add(p),l[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let R=M[x],I=R.start,P=R.count;for(let H=I,z=I+P;H<z;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let A=new k,y=new k,S=new k,E=new k;function T(x){S.fromBufferAttribute(i,x),E.copy(S);let b=a[x];A.copy(b),A.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(E,b);let I=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,b=M.length;x<b;++x){let R=M[x],I=R.start,P=R.count;for(let H=I,z=I+P;H<z;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[m++]=c[d++]}return new Gt(h,u,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new k,ko=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rv=0,Vn=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Is,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Sr=new k,hf=new k,lc=new k,$r=new k,ff=new k,cc=new k,df=new k,Fs=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hf.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(hf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=$r.dot(this.direction),l=-$r.dot(lc),c=$r.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=s*u,f>=0)if(h>=-m)if(h<=m){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(hf).addScaledVector(lc,h),d}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);let n=Sr.dot(this.direction),i=Sr.dot(Sr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,n,i,s){ff.subVectors(t,e),cc.subVectors(n,e),df.crossVectors(ff,cc);let o=this.direction.dot(df),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);let l=a*this.direction.dot(cc.crossVectors($r,cc));if(l<0)return null;let c=a*this.direction.dot(ff.cross($r));if(c<0||l+c>o)return null;let u=-a*$r.dot(df);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gi=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pm=new $e,As=new Fs,uc=new $n,Im=new k,hc=new k,fc=new k,dc=new k,pf=new k,pc=new k,Lm=new k,mc=new k,gt=class extends Nt{constructor(e=new _n,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(pf.fromBufferAttribute(f,e),o?pc.addScaledVector(pf,u):pc.addScaledVector(pf.sub(t),u))}t.add(pc)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(uc.containsPoint(As.origin)===!1&&(As.intersectSphere(uc,Im)===null||As.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Pm.copy(s).invert(),As.copy(e.ray).applyMatrix4(Pm),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let p=h[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),A=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,S=A;y<S;y+=3){let E=a.getX(y),T=a.getX(y+1),x=a.getX(y+2);i=gc(this,g,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=a.getX(p),A=a.getX(p+1),y=a.getX(p+2);i=gc(this,o,e,n,c,u,f,M,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let p=h[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,S=A;y<S;y+=3){let E=y,T=y+1,x=y+2;i=gc(this,g,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=p,A=p+1,y=p+2;i=gc(this,o,e,n,c,u,f,M,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function sv(r,e,t,n,i,s,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Vi,a),l===null)return null;mc.copy(a),mc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(mc);return c<t.near||c>t.far?null:{distance:c,point:mc.clone(),object:r}}function gc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,hc),r.getVertexPosition(l,fc),r.getVertexPosition(c,dc);let u=sv(r,e,t,n,hc,fc,dc,Lm);if(u){let f=new k;Qr.getBarycoord(Lm,hc,fc,dc,f),i&&(u.uv=Qr.getInterpolatedAttribute(i,a,l,c,f,new je)),s&&(u.uv1=Qr.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(u.normal=Qr.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new k,materialIndex:0};Qr.getNormal(hc,fc,dc,h.normal),u.face=h,u.barycoord=f}return u}var La=new vt,Dm=new vt,Nm=new vt,ov=new vt,Um=new $e,_c=new k,mf=new $n,Om=new $e,gf=new Fs,Wa=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mf,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_c),this.boundingBox.expandByPoint(_c)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_c),this.boundingSphere.expandByPoint(_c)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mf.copy(this.boundingSphere),mf.applyMatrix4(i),e.ray.intersectsSphere(mf)!==!1&&(Om.copy(i).invert(),gf.copy(e.ray).applyMatrix4(Om),!(this.boundingBox!==null&&gf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Dm.fromBufferAttribute(i.attributes.skinIndex,e),Nm.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(La.copy(t),t.set(0,0,0,0)):(La.set(...t,1),t.set(0,0,0)),La.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Nm.getComponent(s);if(o!==0){let a=Dm.getComponent(s);Um.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ov.copy(La).applyMatrix4(Um),o)}}return t.isVector4&&(t.w=La.w),t.applyMatrix4(this.bindMatrixInverse)}},zo=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vo=class extends ln{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Jt,u=Jt,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fm=new $e,av=new $e,Xa=class r{constructor(e=[],t=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:av;Fm.multiplyMatrices(a,t[s]),Fm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vo(t,e,e,pi,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(Pe("Skeleton: No bone found with UUID:",s),o=new zo),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ts=class extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ao=new $e,Bm=new $e,xc=[],km=new zn,lv=new $e,Da=new gt,Na=new $n,Bs=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),km.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(km)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),Na.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ao),Bm.multiplyMatrices(n,Ao),Da.matrixWorld=Bm,Da.raycast(e,xc);for(let o=0,a=xc.length;o<a;o++){let l=xc[o];l.instanceId=s,l.object=this,t.push(l)}xc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vo(new Float32Array(i*this.count),i,this.count,lu,di));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_f=new k,cv=new k,uv=new Ze,ji=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_f.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(_f),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uv.getNormalMatrix(e),i=this.coplanarPoint(_f).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new $n,hv=new je(.5,.5),vc=new k,Go=class{constructor(e=new ji,t=new ji,n=new ji,i=new ji,s=new ji,o=new ji){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],_=s[9],p=s[10],g=s[11],M=s[12],A=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-o,d-u,g-m,S-M).normalize(),i[1].setComponents(c+o,d+u,g+m,S+M).normalize(),i[2].setComponents(c+a,d+f,g+_,S+A).normalize(),i[3].setComponents(c-a,d-f,g-_,S-A).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,d-h,g-p,S-y).normalize();else if(i[4].setComponents(c-l,d-h,g-p,S-y).normalize(),t===ki)i[5].setComponents(c+l,d+h,g+p,S+y).normalize();else if(t===Do)i[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=hv.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(vc.x=i.normal.x>0?e.max.x:e.min.x,vc.y=i.normal.y>0?e.max.y:e.min.y,vc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ho=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vc=new k,Gc=new k,zm=new $e,Ua=new Fs,yc=new $n,xf=new k,Vm=new k,ks=class extends Nt{constructor(e=new _n,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vc.fromBufferAttribute(t,i-1),Gc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new gn(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(i),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;zm.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(zm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=u.getX(_),M=u.getX(_+1),A=Mc(this,e,Ua,l,g,M,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(d),g=Mc(this,e,Ua,l,_,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=Mc(this,e,Ua,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Mc(this,e,Ua,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Mc(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Vc.fromBufferAttribute(a,i),Gc.fromBufferAttribute(a,s),t.distanceSqToSegment(Vc,Gc,xf,Vm)>n)return;xf.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(xf);if(!(c<e.near||c>e.far))return{distance:c,point:Vm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Gm=new k,Hm=new k,qa=class extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gm.fromBufferAttribute(t,i),Hm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gm.distanceTo(Hm);e.setAttribute("lineDistance",new gn(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ns=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wm=new $e,Af=new Fs,Sc=new $n,bc=new k,zs=class extends Nt{constructor(e=new _n,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(i),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;Wm.copy(i).invert(),Af.copy(e.ray).applyMatrix4(Wm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){let p=c.getX(m);bc.fromBufferAttribute(f,p),Xm(bc,p,l,i,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,_=d;m<_;m++)bc.fromBufferAttribute(f,m),Xm(bc,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xm(r,e,t,n,i,s,o){let a=Af.distanceSqToPoint(r);if(a<t){let l=new k;Af.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Za=class extends ln{constructor(e=[],t=ls,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wo=class extends ln{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wr=class extends ln{constructor(e,t,n=Xi,i,s,o,a=Jt,l=Jt,c,u=tr,f=1){if(u!==tr&&u!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hc=class extends wr{constructor(e,t=Xi,n=ls,i,s,o=Jt,a=Jt,l,c=tr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},is=class r extends _n{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function m(_,p,g,M,A,y,S,E,T,x,b){let R=y/T,I=S/x,P=y/2,H=S/2,z=E/2,U=T+1,V=x+1,O=0,Z=0,ee=new k;for(let L=0;L<V;L++){let le=L*I-H;for(let _e=0;_e<U;_e++){let Ke=_e*R-P;ee[_]=Ke*M,ee[p]=le*A,ee[g]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[g]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(_e/T),f.push(1-L/x),O+=1}}for(let L=0;L<x;L++)for(let le=0;le<T;le++){let _e=h+le+U*L,Ke=h+le+U*(L+1),Xe=h+(le+1)+U*(L+1),ke=h+(le+1)+U*L;l.push(_e,Ke,ke),l.push(Ke,Xe,ke),Z+=6}a.addGroup(d,Z,b),d+=Z,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rs=class r extends _n{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],f=[],h=[],d=[],m=0,_=[],p=n/2,g=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(d,2));function M(){let y=new k,S=new k,E=0,T=(t-e)/n;for(let x=0;x<=s;x++){let b=[],R=x/s,I=R*(t-e)+e;for(let P=0;P<=i;P++){let H=P/i,z=H*l+a,U=Math.sin(z),V=Math.cos(z);S.x=I*U,S.y=-R*n+p,S.z=I*V,f.push(S.x,S.y,S.z),y.set(U,T,V).normalize(),h.push(y.x,y.y,y.z),d.push(H,1-R),b.push(m++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){let R=_[b][x],I=_[b+1][x],P=_[b+1][x+1],H=_[b][x+1];(e>0||b!==0)&&(u.push(R,I,H),E+=3),(t>0||b!==s-1)&&(u.push(I,P,H),E+=3)}c.addGroup(g,E,0),g+=E}function A(y){let S=m,E=new je,T=new k,x=0,b=y===!0?e:t,R=y===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,p*R,0),h.push(0,R,0),d.push(.5,.5),m++;let I=m;for(let P=0;P<=i;P++){let z=P/i*l+a,U=Math.cos(z),V=Math.sin(z);T.x=b*V,T.y=p*R,T.z=b*U,f.push(T.x,T.y,T.z),h.push(0,R,0),E.x=U*.5+.5,E.y=V*.5*R+.5,d.push(E.x,E.y),m++}for(let P=0;P<i;P++){let H=S+P,z=I+P;y===!0?u.push(z,z+1,H):u.push(z+1,z,H),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ja=class r extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let M=g*h-o;for(let A=0;A<c;A++){let y=A*f-s;m.push(y,-M,0),_.push(0,0,1),p.push(A/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let A=M+c*g,y=M+c*(g+1),S=M+1+c*(g+1),E=M+1+c*g;d.push(A,y,E),d.push(y,S,E)}this.setIndex(d),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function Xs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(qm(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qm(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Rn(r){let e={};for(let t=0;t<r.length;t++){let n=Xs(r[t]);for(let i in n)e[i]=n[i]}return e}function qm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function fv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Fg={clone:Xs,merge:Rn},dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wc=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jn=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qn=class extends jn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=tu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xc=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qc=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function mv(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ym(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function gv(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var rr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yc=class extends rr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bf,endingEnd:bf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tf:s=e,a=2*t-n;break;case wf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tf:o=e,l=2*n-t;break;case wf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-h*p+2*h*_-h*m,M=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*m+1,A=(-1-d)*p+(1.5+d)*_+.5*m,y=d*p-d*_;for(let S=0;S!==a;++S)s[S]=g*o[u+S]+M*o[c+S]+A*o[l+S]+y*o[f+S];return s}},Zc=class extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Kc=class extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Jc=class extends rr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let h=a*2,d=e-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=d*h+m*2,M=f[g],A=f[g+1],y=e*h+m*2,S=u[y],E=u[y+1],T=(n-t)/(i-t),x,b,R,I,P;for(let H=0;H<8;H++){x=T*T,b=x*T,R=1-T,I=R*R,P=I*R;let U=P*t+3*I*T*M+3*R*x*S+b*i-n;if(Math.abs(U)<1e-10)break;let V=3*I*(M-t)+6*R*T*(S-M)+3*x*(i-S);if(Math.abs(V)<1e-10)break;T=T-U/V,T=Math.max(0,Math.min(1,T))}s[m]=P*_+3*I*T*A+3*R*x*E+b*p}return s}},ei=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(t,this.TimeBufferType),this.values=Tc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break;case Sf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return Ac;case this.InterpolantFactoryMethodBezier:return Sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Rx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ac,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let _=t[f+m];if(_!==t[h+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ns;var Er=class extends ei{constructor(e,t,n){super(e,t,n)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Ds;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};ja.prototype.ValueTypeName="color";var Ar=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};Ar.prototype.ValueTypeName="number";var $c=class extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)ui.slerpFlat(s,0,o,c-a,o,c,l);return s}},Rr=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends ei{constructor(e,t,n){super(e,t,n)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Ds;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};ss.prototype.ValueTypeName="vector";var Qa=class{constructor(e="",t=-1,n=[],i=bg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xv(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(ei.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=mv(l);l=Ym(l,1,u),c=Ym(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function _v(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return ja;case"quaternion":return Rr;case"bool":case"boolean":return Er;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_v(r.type);if(r.times===void 0){let t=[],n=[];gv(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Zm(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Zm(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Zm(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xo=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bg=new Xo,sr=class{constructor(e){this.manager=e!==void 0?e:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var br={},Rf=class extends Error{constructor(e,t){super(e),this.response=t}},qo=class extends sr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Qi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:n,onError:i});return}br[e]=[],br[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=br[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0,_=0,p=new ReadableStream({start(g){M();function M(){f.read().then(({done:A,value:y})=>{if(A)g.close();else{_+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let E=0,T=u.length;E<T;E++){let x=u[E];x.onProgress&&x.onProgress(S)}g.enqueue(y),M()}},A=>{g.error(A)})}}});return new Response(p)}else throw new Rf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Qi.add(`file:${e}`,c);let u=br[e];delete br[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=br[e];if(u===void 0)throw this.manager.itemError(e),c;delete br[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ro=new WeakMap,jc=class extends sr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Qi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Ro.get(o);f===void 0&&(f=[],Ro.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=No("img");function l(){u(),t&&t(this);let f=Ro.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Ro.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Qi.remove(`image:${e}`);let h=Ro.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}Ro.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var el=class extends sr{constructor(e){super(e)}load(e,t,n,i){let s=new ln,o=new jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Yo=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vf=new $e,Km=new k,Jm=new k,tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jm),t.updateMatrixWorld(),vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Do||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=new k,Ec=new ui,$i=new k,nl=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Ec,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wc,Ec,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jr=new k,$m=new je,jm=new je,rn=class extends nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,$m,jm),t.subVectors(jm,$m)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cf=class extends tl{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},os=class extends Yo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Cf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pf=class extends tl{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Pr=class extends Yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},as=class extends nl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},If=class extends tl{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new If}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ir=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yf=new WeakMap,il=class extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Qi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{yf.has(o)===!0?(i&&i(yf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Qi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),yf.set(l,c),Qi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Qi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Co=-90,Po=1,Qc=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(Co,Po,e,t);i.layers=this.layers,this.add(i);let s=new rn(Co,Po,e,t);s.layers=this.layers,this.add(s);let o=new rn(Co,Po,e,t);o.layers=this.layers,this.add(o);let a=new rn(Co,Po,e,t);a.layers=this.layers,this.add(a);let l=new rn(Co,Po,e,t);l.layers=this.layers,this.add(l);let c=new rn(Co,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},eu=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ed="\\[\\]\\.:\\/",vv=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",yv="[^"+ed.replace("\\.","")+"]",Mv=/((?:WC+[\/:])*)/.source.replace("WC",td),Sv=/(WCOD+)?/.source.replace("WCOD",yv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),Tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),wv=new RegExp("^"+Mv+Sv+bv+Tv+"$"),Ev=["material","materials","bones","map"],Lf=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){let t=wv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ev.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Lf;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kw=new Float32Array(1);var rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Df=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function nd(r,e,t,n){let i=Av(n);switch(t){case Zf:return r*e;case lu:return r*e/i.components*i.byteLength;case cu:return r*e/i.components*i.byteLength;case us:return r*e*2/i.components*i.byteLength;case uu:return r*e*2/i.components*i.byteLength;case Kf:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case hu:return r*e*4/i.components*i.byteLength;case cl:case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hl:case fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(r,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(r,8)*Math.max(e,8)/2;case gu:case _u:case vu:case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:case dl:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Au:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ou:case Fu:case Bu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ku:case zu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pl:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Av(r){switch(r){case ti:case Wf:return{byteLength:1,components:1};case Jo:case Xf:case ar:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case Xi:case su:case di:return{byteLength:4,components:1};case qf:case Yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function a_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cv(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ty=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ry=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Pv,alphahash_pars_fragment:Iv,alphamap_fragment:Lv,alphamap_pars_fragment:Dv,alphatest_fragment:Nv,alphatest_pars_fragment:Uv,aomap_fragment:Ov,aomap_pars_fragment:Fv,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Gv,iridescence_fragment:Hv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:Zv,color_fragment:Kv,color_pars_fragment:Jv,color_pars_vertex:$v,color_vertex:jv,common:Qv,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,colorspace_fragment:oy,colorspace_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:uy,envmap_pars_vertex:hy,envmap_physical_pars_fragment:Sy,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:xy,lights_lambert_fragment:vy,lights_lambert_pars_fragment:yy,lights_pars_begin:My,lights_toon_fragment:by,lights_toon_pars_fragment:Ty,lights_phong_fragment:wy,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ay,lights_physical_pars_fragment:Ry,lights_fragment_begin:Cy,lights_fragment_maps:Py,lights_fragment_end:Iy,lightprobes_pars_fragment:Ly,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Oy,map_fragment:Fy,map_pars_fragment:By,map_particle_fragment:ky,map_particle_pars_fragment:zy,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Hy,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:qy,morphtarget_vertex:Yy,normal_fragment_begin:Zy,normal_fragment_maps:Ky,normal_pars_fragment:Jy,normal_pars_vertex:$y,normal_vertex:jy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:rM,packing:sM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:xM,skinnormal_vertex:vM,specularmap_fragment:yM,specularmap_pars_fragment:MM,tonemapping_fragment:SM,tonemapping_pars_fragment:bM,transmission_fragment:TM,transmission_pars_fragment:wM,uv_pars_fragment:EM,uv_pars_vertex:AM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:IM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:NM,cube_frag:UM,depth_vert:OM,depth_frag:FM,distance_vert:BM,distance_frag:kM,equirect_vert:zM,equirect_frag:VM,linedashed_vert:GM,linedashed_frag:HM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:ZM,meshmatcap_frag:KM,meshnormal_vert:JM,meshnormal_frag:$M,meshphong_vert:jM,meshphong_frag:QM,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},cr={basic:{uniforms:Rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Rn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Rn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Rn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Rn([ye.common,ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Rn([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};cr.physical={uniforms:Rn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Wu={r:0,b:0,g:0},uS=new $e,l_=new Ze;l_.set(-1,0,0,0,1,0,0,0,1);function hS(r,e,t,n,i,s){let o=new Be(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function m(M){let A=!1,y=d(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===ll)?(c===void 0&&(c=new gt(new is(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Xs(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(l_),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new Ja(2,2),new fi({name:"BackgroundMaterial",uniforms:Xs(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(Wu,Qf(r)),t.buffers.color.setClear(Wu.r,Wu.g,Wu.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:_,dispose:g}}function fS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(I,P,H,z,U){let V=!1,O=f(I,z,H,P);s!==O&&(s=O,c(s.object)),V=d(I,z,H,U),V&&m(I,z,H,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(I,P,H,z),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function f(I,P,H,z){let U=z.wireframe===!0,V=n[P.id];V===void 0&&(V={},n[P.id]=V);let O=I.isInstancedMesh===!0?I.id:0,Z=V[O];Z===void 0&&(Z={},V[O]=Z);let ee=Z[H.id];ee===void 0&&(ee={},Z[H.id]=ee);let L=ee[U];return L===void 0&&(L=h(l()),ee[U]=L),L}function h(I){let P=[],H=[],z=[];for(let U=0;U<t;U++)P[U]=0,H[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:I,attributes:{},index:null}}function d(I,P,H,z){let U=s.attributes,V=P.attributes,O=0,Z=H.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let le=U[ee],_e=V[ee];if(_e===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;O++}return s.attributesNum!==O||s.index!==z}function m(I,P,H,z){let U={},V=P.attributes,O=0,Z=H.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let le=V[ee];le===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),U[ee]=_e,O++}s.attributes=U,s.attributesNum=O,s.index=z}function _(){let I=s.newAttributes;for(let P=0,H=I.length;P<H;P++)I[P]=0}function p(I){g(I,0)}function g(I,P){let H=s.newAttributes,z=s.enabledAttributes,U=s.attributeDivisors;H[I]=1,z[I]===0&&(r.enableVertexAttribArray(I),z[I]=1),U[I]!==P&&(r.vertexAttribDivisor(I,P),U[I]=P)}function M(){let I=s.newAttributes,P=s.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==I[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function A(I,P,H,z,U,V,O){O===!0?r.vertexAttribIPointer(I,P,H,U,V):r.vertexAttribPointer(I,P,H,z,U,V)}function y(I,P,H,z){_();let U=z.attributes,V=H.getAttributes(),O=P.defaultAttributeValues;for(let Z in V){let ee=V[Z];if(ee.location>=0){let L=U[Z];if(L===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),L!==void 0){let le=L.normalized,_e=L.itemSize,Ke=e.get(L);if(Ke===void 0)continue;let Xe=Ke.buffer,ke=Ke.type,J=Ke.bytesPerElement,oe=ke===r.INT||ke===r.UNSIGNED_INT||L.gpuType===su;if(L.isInterleavedBufferAttribute){let ie=L.data,Ae=ie.stride,Fe=L.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<ee.locationSize;Te++)g(ee.location+Te,ie.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<ee.locationSize;Te++)p(ee.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Te=0;Te<ee.locationSize;Te++)A(ee.location+Te,_e/ee.locationSize,ke,le,Ae*J,(Fe+_e/ee.locationSize*Te)*J,oe)}else{if(L.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)g(ee.location+ie,L.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ie=0;ie<ee.locationSize;ie++)p(ee.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let ie=0;ie<ee.locationSize;ie++)A(ee.location+ie,_e/ee.locationSize,ke,le,_e*J,_e/ee.locationSize*ie*J,oe)}}else if(O!==void 0){let le=O[Z];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(ee.location,le);break;case 3:r.vertexAttrib3fv(ee.location,le);break;case 4:r.vertexAttrib4fv(ee.location,le);break;default:r.vertexAttrib1fv(ee.location,le)}}}}M()}function S(){b();for(let I in n){let P=n[I];for(let H in P){let z=P[H];for(let U in z){let V=z[U];for(let O in V)u(V[O].object),delete V[O];delete z[U]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let H in P){let z=P[H];for(let U in z){let V=z[U];for(let O in V)u(V[O].object),delete V[O];delete z[U]}}delete n[I.id]}function T(I){for(let P in n){let H=n[P];for(let z in H){let U=H[z];if(U[I.id]===void 0)continue;let V=U[I.id];for(let O in V)u(V[O].object),delete V[O];delete U[I.id]}}}function x(I){for(let P in n){let H=n[P],z=I.isInstancedMesh===!0?I.id:0,U=H[z];if(U!==void 0){for(let V in U){let O=U[V];for(let Z in O)u(O[Z].object),delete O[Z];delete U[V]}delete H[z],Object.keys(H).length===0&&delete n[P]}}}function b(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function dS(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let x=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ti&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!x)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:E}}function mS(r){let e=this,t=null,n=0,i=!1,s=!1,o=new ji,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{let M=s?0:n,A=M*4,y=g.clippingState||null;l.value=y,y=u(m,h,A,d);for(let S=0;S!==A;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,y=d;A!==_;++A,y+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var hs=4,kg=[.125,.215,.35,.446,.526,.582],qs=20,gS=256,_l=new as,zg=new Be,id=null,rd=0,sd=0,od=!1,_S=new k,ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=_S}=s;id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ar,format:pi,colorSpace:kn,depthBuffer:!1},i=Vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xS(s)),this._blurMaterial=yS(s,e,t),this._ggxMaterial=vS(s,e,t)}return i}_compileMaterial(e){let t=new gt(new _n,e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i,s){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zg),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new is,new Gi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,g=!0):(p.color.copy(zg),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));let S=this._cubeSize;Qo(i,y*S,A>2?S:0,S,S),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-hs?n-m+hs:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Qo(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(a,_l),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Qo(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(a,_l)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[i];f.material=c;let h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*qs-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):qs;p>qs&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qs}`);let g=[],M=0;for(let T=0;T<qs;++T){let x=T/_,b=Math.exp(-x*x/2);g.push(b),T===0?M+=b:T<p&&(M+=2*b)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:A}=this;h.dTheta.value=m,h.mipInt.value=A-n;let y=this._sizeLods[i],S=3*y*(i>A-hs?i-A+hs:0),E=4*(this._cubeSize-y);Qo(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(f,_l)}};function xS(r){let e=[],t=[],n=[],i=r,s=r-hs+1+kg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-hs?l=kg[o-r+hs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,p=2,g=1,M=new Float32Array(_*m*d),A=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,x=E>2?0:-1,b=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];M.set(b,_*m*E),A.set(h,p*m*E);let R=[E,E,E,E,E,E];y.set(R,g*m*E)}let S=new _n;S.setAttribute("position",new Gt(M,_)),S.setAttribute("uv",new Gt(A,p)),S.setAttribute("faceIndex",new Gt(y,g)),n.push(new gt(S,null)),i>hs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vg(r,e,t){let n=new hi(r,e,t);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vS(r,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function yS(r,e,t){let n=new Float32Array(qs),i=new k(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gg(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hg(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var qu=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Za(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:or});s.uniforms.tEquirect.value=t;let o=new gt(i,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=$t),new Qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};function MS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===nu||d===iu)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new qu(m.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===nu||d===iu,_=d===ls||d===Gs;if(m||_){let p=t.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new ta(r)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ta(r)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===nu?h.mapping=ls:d===iu&&(h.mapping=Gs),h}function l(h){let d=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function SS(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ps("WebGLRenderer: "+n+" extension not supported."),i}}}function bS(r,e,t,n){let i={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(d!==null){let M=d.array;_=d.version;for(let A=0,y=M.length;A<y;A+=3){let S=M[A+0],E=M[A+1],T=M[A+2];h.push(S,E,E,T,T,S)}}else{let M=m.array;_=m.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let S=A+0,E=A+1,T=A+2;h.push(S,E,E,T,T,S)}}let p=new(m.count>=65535?Ha:Ga)(h,1);p.version=_;let g=s.get(f);g&&e.remove(g),s.set(f,p)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TS(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let _=0;for(let p=0;p<d;p++)_+=h[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ES(r,e,t){let n=new WeakMap,i=new vt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),m===!0&&(A=2),_===!0&&(A=3);let y=a.attributes.position.count*A,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*f),T=new za(E,y,S,f);T.type=di,T.needsUpdate=!0;let x=A*4;for(let R=0;R<f;R++){let I=p[R],P=g[R],H=M[R],z=y*S*4*R;for(let U=0;U<I.count;U++){let V=U*x;d===!0&&(i.fromBufferAttribute(I,U),E[z+V+0]=i.x,E[z+V+1]=i.y,E[z+V+2]=i.z,E[z+V+3]=0),m===!0&&(i.fromBufferAttribute(P,U),E[z+V+4]=i.x,E[z+V+5]=i.y,E[z+V+6]=i.z,E[z+V+7]=0),_===!0&&(i.fromBufferAttribute(H,U),E[z+V+8]=i.x,E[z+V+9]=i.y,E[z+V+10]=i.z,E[z+V+11]=H.itemSize===4?i.w:1)}}h={count:f,texture:T,size:new je(y,S)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function AS(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var RS={[Ff]:"LINEAR_TONE_MAPPING",[Bf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[al]:"ACES_FILMIC_TONE_MAPPING",[Vf]:"AGX_TONE_MAPPING",[Gf]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function CS(r,e,t,n,i,s){let o=new hi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new wr(e,t):void 0}),a=new hi(e,t,{type:ar,depthBuffer:!1,stencilBuffer:!1}),l=new _n;l.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gn([0,2,0,0,2,0],2));let c=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new gt(l,c),f=new as(-1,1,1,-1,0,1),h=null,d=null,m=!1,_,p=null,g=[],M=!1;this.setSize=function(A,y){o.setSize(A,y),a.setSize(A,y);for(let S=0;S<g.length;S++){let E=g[S];E.setSize&&E.setSize(A,y)}},this.setEffects=function(A){g=A,M=g.length>0&&g[0].isRenderPass===!0;let y=o.width,S=o.height;for(let E=0;E<g.length;E++){let T=g[E];T.setSize&&T.setSize(y,S)}},this.begin=function(A,y){if(m||A.toneMapping===Hi&&g.length===0)return!1;if(p=y,y!==null){let S=y.width,E=y.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return M===!1&&A.setRenderTarget(o),_=A.toneMapping,A.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(A,y){A.toneMapping=_,m=!0;let S=o,E=a;for(let T=0;T<g.length;T++){let x=g[T];if(x.enabled!==!1&&(x.render(A,E,S,y),x.needsSwap!==!1)){let b=S;S=E,E=b}}if(h!==A.outputColorSpace||d!==A.toneMapping){h=A.outputColorSpace,d=A.toneMapping,c.defines={},tt.getTransfer(h)===mt&&(c.defines.SRGB_TRANSFER="");let T=RS[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,A.setRenderTarget(p),A.render(u,f),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var c_=new ln,cd=new wr(1,1),u_=new za,h_=new zc,f_=new Za,Wg=[],Xg=[],qg=new Float32Array(16),Yg=new Float32Array(9),Zg=new Float32Array(4);function na(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Wg[i];if(s===void 0&&(s=new Float32Array(i),Wg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ku(r,e){let t=Xg[e];t===void 0&&(t=new Int32Array(e),Xg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function PS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function IS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function LS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function DS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function NS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Zg.set(n),r.uniformMatrix2fv(this.addr,!1,Zg),un(t,n)}}function US(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Yg.set(n),r.uniformMatrix3fv(this.addr,!1,Yg),un(t,n)}}function OS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;qg.set(n),r.uniformMatrix4fv(this.addr,!1,qg),un(t,n)}}function FS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function BS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function kS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function zS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function VS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function HS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function WS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function XS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cd.compareFunction=t.isReversedDepthBuffer()?Hu:Gu,s=cd):s=c_,t.setTexture2D(e||s,i)}function qS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||h_,i)}function YS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||f_,i)}function ZS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||u_,i)}function KS(r){switch(r){case 5126:return PS;case 35664:return IS;case 35665:return LS;case 35666:return DS;case 35674:return NS;case 35675:return US;case 35676:return OS;case 5124:case 35670:return FS;case 35667:case 35671:return BS;case 35668:case 35672:return kS;case 35669:case 35673:return zS;case 5125:return VS;case 36294:return GS;case 36295:return HS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return ZS}}function JS(r,e){r.uniform1fv(this.addr,e)}function $S(r,e){let t=na(e,this.size,2);r.uniform2fv(this.addr,t)}function jS(r,e){let t=na(e,this.size,3);r.uniform3fv(this.addr,t)}function QS(r,e){let t=na(e,this.size,4);r.uniform4fv(this.addr,t)}function eb(r,e){let t=na(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tb(r,e){let t=na(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nb(r,e){let t=na(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ib(r,e){r.uniform1iv(this.addr,e)}function rb(r,e){r.uniform2iv(this.addr,e)}function sb(r,e){r.uniform3iv(this.addr,e)}function ob(r,e){r.uniform4iv(this.addr,e)}function ab(r,e){r.uniform1uiv(this.addr,e)}function lb(r,e){r.uniform2uiv(this.addr,e)}function cb(r,e){r.uniform3uiv(this.addr,e)}function ub(r,e){r.uniform4uiv(this.addr,e)}function hb(r,e,t){let n=this.cache,i=e.length,s=Ku(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=cd:o=c_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function fb(r,e,t){let n=this.cache,i=e.length,s=Ku(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||h_,s[o])}function db(r,e,t){let n=this.cache,i=e.length,s=Ku(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||f_,s[o])}function pb(r,e,t){let n=this.cache,i=e.length,s=Ku(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||u_,s[o])}function mb(r){switch(r){case 5126:return JS;case 35664:return $S;case 35665:return jS;case 35666:return QS;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}var ud=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KS(t.type)}},hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mb(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},ad=/(\w+)(\])?(\[|\.)?/g;function Kg(r,e){r.seq.push(e),r.map[e.id]=e}function gb(r,e,t){let n=r.name,i=n.length;for(ad.lastIndex=0;;){let s=ad.exec(n),o=ad.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kg(t,c===void 0?new ud(a,r,e):new hd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new fd(a),Kg(t,f)),t=f}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);gb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Jg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var _b=37297,xb=0;function vb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $g=new Ze;function yb(r){tt._getMatrix($g,tt.workingColorSpace,r);let e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case Ba:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+vb(r.getShaderSource(e),a)}else return s}function Mb(r,e){let t=yb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Sb={[Ff]:"Linear",[Bf]:"Reinhard",[kf]:"Cineon",[al]:"ACESFilmic",[Vf]:"AgX",[Gf]:"Neutral",[zf]:"Custom"};function bb(r,e){let t=Sb[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xu=new k;function Tb(){tt.getLuminanceCoefficients(Xu);let r=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function Eb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ab(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function vl(r){return r!==""}function Qg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(r){return r.replace(Rb,Pb)}var Cb=new Map;function Pb(r,e){let t=Qe[e];if(t===void 0){let n=Cb.get(e);if(n!==void 0)t=Qe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dd(t)}var Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(r){return r.replace(Ib,Lb)}function Lb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function n_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Db={[sl]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function Nb(r){return Db[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ub={[ls]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function Ob(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ub[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fb={[Gs]:"ENVMAP_MODE_REFRACTION"};function Bb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Fb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kb={[tu]:"ENVMAP_BLENDING_MULTIPLY",[yg]:"ENVMAP_BLENDING_MIX",[Mg]:"ENVMAP_BLENDING_ADD"};function zb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kb[r.combine]||"ENVMAP_BLENDING_NONE"}function Vb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gb(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Nb(t),c=Ob(t),u=Bb(t),f=zb(t),h=Vb(t),d=wb(t),m=Eb(s),_=i.createProgram(),p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vl).join(`
`),g.length>0&&(g+=`
`)):(p=[n_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),g=[n_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hi?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Mb("linearToOutputTexel",t.outputColorSpace),Tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),o=dd(o),o=Qg(o,t),o=e_(o,t),a=dd(a),a=Qg(a,t),a=e_(a,t),o=t_(o),a=t_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=M+p+o,y=M+g+a,S=Jg(i,i.VERTEX_SHADER,A),E=Jg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(S)||"",z=i.getShaderInfoLog(E)||"",U=P.trim(),V=H.trim(),O=z.trim(),Z=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,E);else{let L=jg(i,S,"vertex"),le=jg(i,E,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+L+`
`+le)}else U!==""?Pe("WebGLProgram: Program Info Log:",U):(V===""||O==="")&&(ee=!1);ee&&(I.diagnostics={runnable:Z,programLog:U,vertexShader:{log:V,prefix:p},fragmentShader:{log:O,prefix:g}})}i.deleteShader(S),i.deleteShader(E),x=new ea(i,_),b=Ab(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,_b)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var Hb=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new md(e),t.set(e,n)),n}},md=class{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}};function Wb(r){return r===us||r===dl||r===pl}function Xb(r,e,t,n,i,s){let o=new Va,a=new pd,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,R,I,P,H){let z=I.fog,U=P.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||V,O),ee=Z&&Z.mapping===ll?Z.image.height:null,L=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let le=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_e=le!==void 0?le.length:0,Ke=0;U.morphAttributes.position!==void 0&&(Ke=1),U.morphAttributes.normal!==void 0&&(Ke=2),U.morphAttributes.color!==void 0&&(Ke=3);let Xe,ke,J,oe;if(L){let ne=cr[L];Xe=ne.vertexShader,ke=ne.fragmentShader}else{Xe=x.vertexShader,ke=x.fragmentShader;let ne=a.getVertexShaderStage(x),Ue=a.getFragmentShaderStage(x);a.update(x,ne,Ue),J=ne.id,oe=Ue.id}let ie=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Fe=P.isInstancedMesh===!0,Te=P.isBatchedMesh===!0,lt=!!x.map,Se=!!x.matcap,ze=!!Z,We=!!x.aoMap,He=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Mt=!!x.displacementMap,Ct=!!x.emissiveMap,qe=!!x.metalnessMap,pt=!!x.roughnessMap,N=x.anisotropy>0,kt=x.clearcoat>0,Ge=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,W=N&&!!x.anisotropyMap,K=kt&&!!x.clearcoatMap,ue=kt&&!!x.clearcoatNormalMap,ae=kt&&!!x.clearcoatRoughnessMap,$=C&&!!x.iridescenceMap,j=C&&!!x.iridescenceThicknessMap,de=v&&!!x.sheenColorMap,Ee=v&&!!x.sheenRoughnessMap,pe=!!x.specularMap,fe=!!x.specularColorMap,ce=!!x.specularIntensityMap,Ie=B&&!!x.transmissionMap,Ne=B&&!!x.thicknessMap,D=!!x.gradientMap,he=!!x.alphaMap,Q=x.alphaTest>0,me=!!x.alphaHash,ge=!!x.extensions,te=Hi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=r.toneMapping);let re={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:ke,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Te,batchingColor:Te&&P._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&P.instanceColor!==null,instancingMorph:Fe&&P.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:Se,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:ee,aoMap:We,lightMap:He,bumpMap:q,normalMap:ft,displacementMap:Mt,emissiveMap:Ct,normalMapObjectSpace:ft&&x.normalMapType===wg,normalMapTangentSpace:ft&&x.normalMapType===gl,packedNormalMap:ft&&x.normalMapType===gl&&Wb(x.normalMap.format),metalnessMap:qe,roughnessMap:pt,anisotropy:N,anisotropyMap:W,clearcoat:kt,clearcoatMap:K,clearcoatNormalMap:ue,clearcoatRoughnessMap:ae,dispersion:Ge,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:j,sheen:v,sheenColorMap:de,sheenRoughnessMap:Ee,specularMap:pe,specularColorMap:fe,specularIntensityMap:ce,transmission:B,transmissionMap:Ie,thicknessMap:Ne,gradientMap:D,opaque:x.transparent===!1&&x.blending===Is&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:me,combine:x.combine,mapUv:lt&&m(x.map.channel),aoMapUv:We&&m(x.aoMap.channel),lightMapUv:He&&m(x.lightMap.channel),bumpMapUv:q&&m(x.bumpMap.channel),normalMapUv:ft&&m(x.normalMap.channel),displacementMapUv:Mt&&m(x.displacementMap.channel),emissiveMapUv:Ct&&m(x.emissiveMap.channel),metalnessMapUv:qe&&m(x.metalnessMap.channel),roughnessMapUv:pt&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:K&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(x.sheenRoughnessMap.channel),specularMapUv:pe&&m(x.specularMap.channel),specularColorMapUv:fe&&m(x.specularColorMap.channel),specularIntensityMapUv:ce&&m(x.specularIntensityMap.channel),transmissionMapUv:Ie&&m(x.transmissionMap.channel),thicknessMapUv:Ne&&m(x.thicknessMap.channel),alphaMapUv:he&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||N),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(lt||he),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let b=d[x.type],R;if(b){let I=cr[b];R=Fg.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new Gb(r,b,x,i),c.push(R),u.set(b,R)),R}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:T}}function qb(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Yb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function i_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function r_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,_,p,g){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:g},r[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=p,M.group=g),e++,M}function l(h,d,m,_,p,g){let M=a(h,d,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(h,d,m,_,p,g){let M=a(h,d,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,d,m){t.length>1&&t.sort(h||Yb),n.length>1&&n.sort(d||i_),i.length>1&&i.sort(d||i_),m&&(t.reverse(),n.reverse(),i.reverse())}function f(){for(let h=e,d=r.length;h<d;h++){let m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function Zb(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new r_,r.set(n,[o])):i>=s.length?(o=new r_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Be};break;case"SpotLight":t={position:new k,direction:new k,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function Jb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var $b=0;function jb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qb(r){let e=new Kb,t=Jb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new $e,o=new $e;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,M=0,A=0,y=0,S=0,E=0,T=0;c.sort(jb);for(let b=0,R=c.length;b<R;b++){let I=c[b],P=I.color,H=I.intensity,z=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===us?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=P.r*H,f+=P.g*H,h+=P.b*H;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],H);T++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=V,d++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(P).multiplyScalar(H),V.distance=z,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;let O=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,O.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=O.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=U,y++}_++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(P).multiplyScalar(H),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=V,p++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let O=I.shadow,Z=t.get(I);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=V,m++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(H),V.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[g]=V,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==d||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==S||x.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,x.directionalLength=d,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=S,x.numLightProbes=T,n.version=$b++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0,p=u.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let A=c[g];if(A.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(A.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(A.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(A.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function s_(r){let e=new Qb(r),t=[],n=[],i=[];function s(h){f.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function eT(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new s_(r),e.set(i,[a])):s>=o.length?(a=new s_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iT=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],rT=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],o_=new $e,xl=new k,ld=new k;function sT(r,e,t){let n=new Go,i=new je,s=new je,o=new vt,a=new Xc,l=new qc,c={},u=t.maxTextureSize,f={[Vi]:yn,[yn]:Vi,[Ai]:Ai},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:tT,fragmentShader:nT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new _n;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let g=this.type;this.render=function(E,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===tg&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);let b=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),P=r.state;P.setBlending(or),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let H=g!==this.type;H&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(U=>U.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,U=E.length;z<U;z++){let V=E[z],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));let ee=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ee,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Zo){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hi(i.x,i.y,{format:us,type:ar,minFilter:$t,magFilter:$t,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new wr(i.x,i.y,di),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=tr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt}else V.isPointLight?(O.map=new qu(i.x),O.map.depthTexture=new Hc(i.x,Xi)):(O.map=new hi(i.x,i.y),O.map.depthTexture=new wr(i.x,i.y,Xi)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=tr,this.type===sl?(O.map.depthTexture.compareFunction=ee?Hu:Gu,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt);O.camera.updateProjectionMatrix()}let L=O.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<L;le++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,le),r.clear();else{le===0&&(r.setRenderTarget(O.map),r.clear());let _e=O.getViewport(le);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),P.viewport(o)}if(V.isPointLight){let _e=O.camera,Ke=O.matrix,Xe=V.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),xl.setFromMatrixPosition(V.matrixWorld),_e.position.copy(xl),ld.copy(_e.position),ld.add(iT[le]),_e.up.copy(rT[le]),_e.lookAt(ld),_e.updateMatrixWorld(),Ke.makeTranslation(-xl.x,-xl.y,-xl.z),o_.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),O._frustum.setFromProjectionMatrix(o_,_e.coordinateSystem,_e.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),y(T,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Zo&&M(O,x),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(b,R,I)};function M(E,T){let x=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(i.x,i.y,{format:us,type:ar})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,x,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,x,d,_,null)}function A(E,T,x,b){let R=null,I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=R.uuid,H=T.uuid,z=c[P];z===void 0&&(z={},c[P]=z);let U=z[H];U===void 0&&(U=R.clone(),z[H]=U,T.addEventListener("dispose",S)),R=U}if(R.visible=T.visible,R.wireframe=T.wireframe,b===Zo?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:f[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=r.properties.get(R);P.light=x}return R}function y(E,T,x,b,R){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Zo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let H=e.update(E),z=E.material;if(Array.isArray(z)){let U=H.groups;for(let V=0,O=U.length;V<O;V++){let Z=U[V],ee=z[Z.materialIndex];if(ee&&ee.visible){let L=A(E,ee,b,R);E.onBeforeShadow(r,E,T,x,H,L,Z),r.renderBufferDirect(x,null,H,L,E,Z),E.onAfterShadow(r,E,T,x,H,L,Z)}}}else if(z.visible){let U=A(E,z,b,R);E.onBeforeShadow(r,E,T,x,H,U,null),r.renderBufferDirect(x,null,H,U,E,null),E.onAfterShadow(r,E,T,x,H,U,null)}}let P=E.children;for(let H=0,z=P.length;H<z;H++)y(P[H],T,x,b,R)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let b=c[x],R=E.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function oT(r,e){function t(){let D=!1,he=new vt,Q=null,me=new vt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!D&&(r.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,te,re,ne,Ue){Ue===!0&&(ge*=ne,te*=ne,re*=ne),he.set(ge,te,re,ne),me.equals(he)===!1&&(r.clearColor(ge,te,re,ne),me.copy(he))},reset:function(){D=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,Q=null,me=null,ge=null;return{setReversed:function(te){if(he!==te){let re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),he=te;let ne=ge;ge=null,this.setClear(ne)}},getReversed:function(){return he},setTest:function(te){te?ie(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(te){Q!==te&&!D&&(r.depthMask(te),Q=te)},setFunc:function(te){if(he&&(te=Ug[te]),me!==te){switch(te){case Pc:r.depthFunc(r.NEVER);break;case Ic:r.depthFunc(r.ALWAYS);break;case Lc:r.depthFunc(r.LESS);break;case Ls:r.depthFunc(r.LEQUAL);break;case Dc:r.depthFunc(r.EQUAL);break;case Nc:r.depthFunc(r.GEQUAL);break;case Uc:r.depthFunc(r.GREATER);break;case Oc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=te}},setLocked:function(te){D=te},setClear:function(te){ge!==te&&(ge=te,he&&(te=1-te),r.clearDepth(te))},reset:function(){D=!1,Q=null,me=null,ge=null,he=!1}}}function i(){let D=!1,he=null,Q=null,me=null,ge=null,te=null,re=null,ne=null,Ue=null;return{setTest:function(se){D||(se?ie(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(se){he!==se&&!D&&(r.stencilMask(se),he=se)},setFunc:function(se,Oe,Re){(Q!==se||me!==Oe||ge!==Re)&&(r.stencilFunc(se,Oe,Re),Q=se,me=Oe,ge=Re)},setOp:function(se,Oe,Re){(te!==se||re!==Oe||ne!==Re)&&(r.stencilOp(se,Oe,Re),te=se,re=Oe,ne=Re)},setLocked:function(se){D=se},setClear:function(se){Ue!==se&&(r.clearStencil(se),Ue=se)},reset:function(){D=!1,he=null,Q=null,me=null,ge=null,te=null,re=null,ne=null,Ue=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,A=null,y=null,S=null,E=null,T=null,x=new Be(0,0,0),b=0,R=!1,I=null,P=null,H=null,z=null,U=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),O=Z>=1):ee.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),O=Z>=2);let L=null,le={},_e=r.getParameter(r.SCISSOR_BOX),Ke=r.getParameter(r.VIEWPORT),Xe=new vt().fromArray(_e),ke=new vt().fromArray(Ke);function J(D,he,Q,me){let ge=new Uint8Array(4),te=r.createTexture();r.bindTexture(D,te),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<Q;re++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(he+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return te}let oe={};oe[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(Ls),q(!1),ft(Nf),ie(r.CULL_FACE),We(or);function ie(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Fe(D,he){return h[D]!==he?(r.bindFramebuffer(D,he),h[D]=he,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(D,he){let Q=m,me=!1;if(D){Q=d.get(he),Q===void 0&&(Q=[],d.set(he,Q));let ge=D.textures;if(Q.length!==ge.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let te=0,re=ge.length;te<re;te++)Q[te]=r.COLOR_ATTACHMENT0+te;Q.length=ge.length,me=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,me=!0);me&&r.drawBuffers(Q)}function lt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Se={[es]:r.FUNC_ADD,[ig]:r.FUNC_SUBTRACT,[rg]:r.FUNC_REVERSE_SUBTRACT};Se[sg]=r.MIN,Se[og]=r.MAX;let ze={[ag]:r.ZERO,[lg]:r.ONE,[cg]:r.SRC_COLOR,[Rc]:r.SRC_ALPHA,[mg]:r.SRC_ALPHA_SATURATE,[dg]:r.DST_COLOR,[hg]:r.DST_ALPHA,[ug]:r.ONE_MINUS_SRC_COLOR,[Cc]:r.ONE_MINUS_SRC_ALPHA,[pg]:r.ONE_MINUS_DST_COLOR,[fg]:r.ONE_MINUS_DST_ALPHA,[gg]:r.CONSTANT_COLOR,[_g]:r.ONE_MINUS_CONSTANT_COLOR,[xg]:r.CONSTANT_ALPHA,[vg]:r.ONE_MINUS_CONSTANT_ALPHA};function We(D,he,Q,me,ge,te,re,ne,Ue,se){if(D===or){p===!0&&(Ae(r.BLEND),p=!1);return}if(p===!1&&(ie(r.BLEND),p=!0),D!==ng){if(D!==g||se!==R){if((M!==es||S!==es)&&(r.blendEquation(r.FUNC_ADD),M=es,S=es),se)switch(D){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",D);break}else switch(D){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uf:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",D);break}A=null,y=null,E=null,T=null,x.set(0,0,0),b=0,g=D,R=se}return}ge=ge||he,te=te||Q,re=re||me,(he!==M||ge!==S)&&(r.blendEquationSeparate(Se[he],Se[ge]),M=he,S=ge),(Q!==A||me!==y||te!==E||re!==T)&&(r.blendFuncSeparate(ze[Q],ze[me],ze[te],ze[re]),A=Q,y=me,E=te,T=re),(ne.equals(x)===!1||Ue!==b)&&(r.blendColor(ne.r,ne.g,ne.b,Ue),x.copy(ne),b=Ue),g=D,R=!1}function He(D,he){D.side===Ai?Ae(r.CULL_FACE):ie(r.CULL_FACE);let Q=D.side===yn;he&&(Q=!Q),q(Q),D.blending===Is&&D.transparent===!1?We(or):We(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function q(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function ft(D){D!==Qm?(ie(r.CULL_FACE),D!==P&&(D===Nf?r.cullFace(r.BACK):D===eg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),P=D}function Mt(D){D!==H&&(O&&r.lineWidth(D),H=D)}function Ct(D,he,Q){D?(ie(r.POLYGON_OFFSET_FILL),(z!==he||U!==Q)&&(z=he,U=Q,o.getReversed()&&(he=-he),r.polygonOffset(he,Q))):Ae(r.POLYGON_OFFSET_FILL)}function qe(D){D?ie(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function pt(D){D===void 0&&(D=r.TEXTURE0+V-1),L!==D&&(r.activeTexture(D),L=D)}function N(D,he,Q){Q===void 0&&(L===null?Q=r.TEXTURE0+V-1:Q=L);let me=le[Q];me===void 0&&(me={type:void 0,texture:void 0},le[Q]=me),(me.type!==D||me.texture!==he)&&(L!==Q&&(r.activeTexture(Q),L=Q),r.bindTexture(D,he||oe[D]),me.type=D,me.texture=he)}function kt(){let D=le[L];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ge(){try{r.compressedTexImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function v(){try{r.texSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function B(){try{r.texSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ue(){try{r.texStorage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ae(){try{r.texStorage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function $(){try{r.texImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function j(){try{r.texImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function de(D){return f[D]!==void 0?f[D]:r.getParameter(D)}function Ee(D,he){f[D]!==he&&(r.pixelStorei(D,he),f[D]=he)}function pe(D){Xe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function fe(D){ke.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function ce(D,he){let Q=c.get(he);Q===void 0&&(Q=new WeakMap,c.set(he,Q));let me=Q.get(D);me===void 0&&(me=r.getUniformBlockIndex(he,D.name),Q.set(D,me))}function Ie(D,he){let me=c.get(he).get(D);l.get(he)!==me&&(r.uniformBlockBinding(he,me,D.__bindingPointIndex),l.set(he,me))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},L=null,le={},h={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,A=null,y=null,S=null,E=null,T=null,x=new Be(0,0,0),b=0,R=!1,I=null,P=null,H=null,z=null,U=null,Xe.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ae,bindFramebuffer:Fe,drawBuffers:Te,useProgram:lt,setBlending:We,setMaterial:He,setFlipSided:q,setCullFace:ft,setLineWidth:Mt,setPolygonOffset:Ct,setScissorTest:qe,activeTexture:pt,bindTexture:N,unbindTexture:kt,compressedTexImage2D:Ge,compressedTexImage3D:C,texImage2D:$,texImage3D:j,pixelStorei:Ee,getParameter:de,updateUBOMapping:ce,uniformBlockBinding:Ie,texStorage2D:ue,texStorage3D:ae,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:pe,viewport:fe,reset:Ne}}function aT(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return m?new OffscreenCanvas(C,v):No("canvas")}function p(C,v,B){let W=1,K=Ge(C);if((K.width>B||K.height>B)&&(W=B/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ue=Math.floor(W*K.width),ae=Math.floor(W*K.height);h===void 0&&(h=_(ue,ae));let $=v?_(ue,ae):h;return $.width=ue,$.height=ae,$.getContext("2d").drawImage(C,0,0,ue,ae),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+ae+")."),$}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function M(C){r.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,v,B,W,K,ue=!1){if(C!==null){if(r[C]!==void 0)return r[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8),B===r.UNSIGNED_SHORT&&ae&&($=ae.R16_EXT),B===r.SHORT&&ae&&($=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),v===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8),B===r.UNSIGNED_SHORT&&ae&&($=ae.RG16_EXT),B===r.SHORT&&ae&&($=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),v===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),v===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),v===r.RGB&&(B===r.UNSIGNED_SHORT&&ae&&($=ae.RGB16_EXT),B===r.SHORT&&ae&&($=ae.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),v===r.RGBA){let j=ue?Ba:tt.getTransfer(K);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=j===mt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ae&&($=ae.RGBA16_EXT),B===r.SHORT&&ae&&($=ae.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(C,v){let B;return C?v===null||v===Xi||v===$o?B=r.DEPTH24_STENCIL8:v===di?B=r.DEPTH32F_STENCIL8:v===Jo&&(B=r.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xi||v===$o?B=r.DEPTH_COMPONENT24:v===di?B=r.DEPTH_COMPONENT32F:v===Jo&&(B=r.DEPTH_COMPONENT16),B}function E(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){let v=C.target;v.removeEventListener("dispose",T),b(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),I(v)}function b(C){let v=n.get(C);if(v.__webglInit===void 0)return;let B=C.source,W=d.get(B);if(W){let K=W[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(W).length===0&&d.delete(B)}n.remove(C)}function R(C){let v=n.get(C);r.deleteTexture(v.__webglTexture);let B=C.source,W=d.get(B);delete W[v.__cacheKey],o.memory.textures--}function I(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let K=0;K<v.__webglFramebuffer[W].length;K++)r.deleteFramebuffer(v.__webglFramebuffer[W][K]);else r.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)r.deleteFramebuffer(v.__webglFramebuffer[W]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let W=0,K=B.length;W<K;W++){let ue=n.get(B[W]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(B[W])}n.remove(C)}let P=0;function H(){P=0}function z(){return P}function U(C){P=C}function V(){let C=P;return C>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function O(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Z(C,v){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let W=C.image;if(W===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+v)}function ee(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ae(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+v)}function L(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ae(B,C,v);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+v)}function le(C,v){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Fe(B,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+v)}let _e={[er]:r.REPEAT,[Ei]:r.CLAMP_TO_EDGE,[Lo]:r.MIRRORED_REPEAT},Ke={[Jt]:r.NEAREST,[ru]:r.NEAREST_MIPMAP_NEAREST,[Hs]:r.NEAREST_MIPMAP_LINEAR,[$t]:r.LINEAR,[Ko]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},Xe={[Eg]:r.NEVER,[Ig]:r.ALWAYS,[Ag]:r.LESS,[Gu]:r.LEQUAL,[Rg]:r.EQUAL,[Hu]:r.GEQUAL,[Cg]:r.GREATER,[Pg]:r.NOTEQUAL};function ke(C,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===Ko||v.magFilter===Hs||v.magFilter===Wi||v.minFilter===$t||v.minFilter===Ko||v.minFilter===Hs||v.minFilter===Wi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,_e[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,_e[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,_e[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Ke[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Ke[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==Hs&&v.minFilter!==Wi||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));let W=v.source,K=d.get(W);K===void 0&&(K={},d.set(W,K));let ue=O(v);if(ue!==C.__cacheKey){K[ue]===void 0&&(K[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[ue].usedTimes++;let ae=K[C.__cacheKey];ae!==void 0&&(K[C.__cacheKey].usedTimes--,ae.usedTimes===0&&R(v)),C.__cacheKey=ue,C.__webglTexture=K[ue].texture}return B}function oe(C,v,B){return Math.floor(Math.floor(C/B)/v)}function ie(C,v,B,W){let ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,B,W,v.data);else{ue.sort((Ee,pe)=>Ee.start-pe.start);let ae=0;for(let Ee=1;Ee<ue.length;Ee++){let pe=ue[ae],fe=ue[Ee],ce=pe.start+pe.count,Ie=oe(fe.start,v.width,4),Ne=oe(pe.start,v.width,4);fe.start<=ce+1&&Ie===Ne&&oe(fe.start+fe.count-1,v.width,4)===Ie?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ae,ue[ae]=fe)}ue.length=ae+1;let $=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,pe=ue.length;Ee<pe;Ee++){let fe=ue[Ee],ce=Math.floor(fe.start/4),Ie=Math.ceil(fe.count/4),Ne=ce%v.width,D=Math.floor(ce/v.width),he=Ie,Q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ne,D,he,Q,B,W,v.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function Ae(C,v,B){let W=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=r.TEXTURE_3D);let K=J(C,v),ue=v.source;t.bindTexture(W,C.__webglTexture,r.TEXTURE0+B);let ae=n.get(ue);if(ue.version!==ae.__version||K===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Q=tt.getPrimaries(tt.workingColorSpace),me=v.colorSpace===Lr?null:tt.getPrimaries(v.colorSpace),ge=v.colorSpace===Lr||Q===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let j=p(v.image,!1,i.maxTextureSize);j=kt(v,j);let de=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),pe=y(v.internalFormat,de,Ee,v.normalized,v.colorSpace,v.isVideoTexture);ke(W,v);let fe,ce=v.mipmaps,Ie=v.isVideoTexture!==!0,Ne=ae.__version===void 0||K===!0,D=ue.dataReady,he=E(v,j);if(v.isDepthTexture)pe=S(v.format===cs,v.type),Ne&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,pe,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,pe,j.width,j.height,0,de,Ee,null));else if(v.isDataTexture)if(ce.length>0){Ie&&Ne&&t.texStorage2D(r.TEXTURE_2D,he,pe,ce[0].width,ce[0].height);for(let Q=0,me=ce.length;Q<me;Q++)fe=ce[Q],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,Q,pe,fe.width,fe.height,0,de,Ee,fe.data);v.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(r.TEXTURE_2D,he,pe,j.width,j.height),D&&ie(v,j,de,Ee)):t.texImage2D(r.TEXTURE_2D,0,pe,j.width,j.height,0,de,Ee,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,pe,ce[0].width,ce[0].height,j.depth);for(let Q=0,me=ce.length;Q<me;Q++)if(fe=ce[Q],v.format!==pi)if(de!==null)if(Ie){if(D)if(v.layerUpdates.size>0){let ge=nd(fe.width,fe.height,v.format,v.type);for(let te of v.layerUpdates){let re=fe.data.subarray(te*ge/fe.data.BYTES_PER_ELEMENT,(te+1)*ge/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,te,fe.width,fe.height,1,de,re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,j.depth,0,fe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,de,Ee,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,j.depth,0,de,Ee,fe.data)}else{Ie&&Ne&&t.texStorage2D(r.TEXTURE_2D,he,pe,ce[0].width,ce[0].height);for(let Q=0,me=ce.length;Q<me;Q++)fe=ce[Q],v.format!==pi?de!==null?Ie?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,pe,fe.width,fe.height,0,fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,Q,pe,fe.width,fe.height,0,de,Ee,fe.data)}else if(v.isDataArrayTexture)if(Ie){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,pe,j.width,j.height,j.depth),D)if(v.layerUpdates.size>0){let Q=nd(j.width,j.height,v.format,v.type);for(let me of v.layerUpdates){let ge=j.data.subarray(me*Q/j.data.BYTES_PER_ELEMENT,(me+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,j.width,j.height,1,de,Ee,ge)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,Ee,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,j.width,j.height,j.depth,0,de,Ee,j.data);else if(v.isData3DTexture)Ie?(Ne&&t.texStorage3D(r.TEXTURE_3D,he,pe,j.width,j.height,j.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,Ee,j.data)):t.texImage3D(r.TEXTURE_3D,0,pe,j.width,j.height,j.depth,0,de,Ee,j.data);else if(v.isFramebufferTexture){if(Ne)if(Ie)t.texStorage2D(r.TEXTURE_2D,he,pe,j.width,j.height);else{let Q=j.width,me=j.height;for(let ge=0;ge<he;ge++)t.texImage2D(r.TEXTURE_2D,ge,pe,Q,me,0,de,Ee,null),Q>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let Q=r.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),f.add(v),Q.onpaint=me=>{let ge=me.changedElements;for(let te of f)ge.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let ge=r.RGBA,te=r.RGBA,re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,te,re,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Ie&&Ne){let Q=Ge(ce[0]);t.texStorage2D(r.TEXTURE_2D,he,pe,Q.width,Q.height)}for(let Q=0,me=ce.length;Q<me;Q++)fe=ce[Q],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,de,Ee,fe):t.texImage2D(r.TEXTURE_2D,Q,pe,de,Ee,fe);v.generateMipmaps=!1}else if(Ie){if(Ne){let Q=Ge(j);t.texStorage2D(r.TEXTURE_2D,he,pe,Q.width,Q.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ee,j)}else t.texImage2D(r.TEXTURE_2D,0,pe,de,Ee,j);g(v)&&M(W),ae.__version=ue.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Fe(C,v,B){if(v.image.length!==6)return;let W=J(C,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);let ue=n.get(K);if(K.version!==ue.__version||W===!0){t.activeTexture(r.TEXTURE0+B);let ae=tt.getPrimaries(tt.workingColorSpace),$=v.colorSpace===Lr?null:tt.getPrimaries(v.colorSpace),j=v.colorSpace===Lr||ae===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!de&&!Ee?pe[te]=p(v.image[te],!0,i.maxCubemapSize):pe[te]=Ee?v.image[te].image:v.image[te],pe[te]=kt(v,pe[te]);let fe=pe[0],ce=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type),Ne=y(v.internalFormat,ce,Ie,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,he=ue.__version===void 0||W===!0,Q=K.dataReady,me=E(v,fe);ke(r.TEXTURE_CUBE_MAP,v);let ge;if(de){D&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ne,fe.width,fe.height);for(let te=0;te<6;te++){ge=pe[te].mipmaps;for(let re=0;re<ge.length;re++){let ne=ge[re];v.format!==pi?ce!==null?D?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ne.width,ne.height,ce,ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Ne,ne.width,ne.height,0,ne.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ne.width,ne.height,ce,Ie,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Ne,ne.width,ne.height,0,ce,Ie,ne.data)}}}else{if(ge=v.mipmaps,D&&he){ge.length>0&&me++;let te=Ge(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ne,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,ce,Ie,pe[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ne,pe[te].width,pe[te].height,0,ce,Ie,pe[te].data);for(let re=0;re<ge.length;re++){let Ue=ge[re].image[te].image;D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,Ue.width,Ue.height,ce,Ie,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Ne,Ue.width,Ue.height,0,ce,Ie,Ue.data)}}else{D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce,Ie,pe[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ne,ce,Ie,pe[te]);for(let re=0;re<ge.length;re++){let ne=ge[re];D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,ce,Ie,ne.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Ne,ce,Ie,ne.image[te])}}}g(v)&&M(r.TEXTURE_CUBE_MAP),ue.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Te(C,v,B,W,K,ue){let ae=s.convert(B.format,B.colorSpace),$=s.convert(B.type),j=y(B.internalFormat,ae,$,B.normalized,B.colorSpace),de=n.get(v),Ee=n.get(B);if(Ee.__renderTarget=v,!de.__hasExternalTextures){let pe=Math.max(1,v.width>>ue),fe=Math.max(1,v.height>>ue);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,ue,j,pe,fe,v.depth,0,ae,$,null):t.texImage2D(K,ue,j,pe,fe,0,ae,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,K,Ee.__webglTexture,0,qe(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,K,Ee.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,v,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){let W=v.depthTexture,K=W&&W.isDepthTexture?W.type:null,ue=S(v.stencilBuffer,K),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(v),ue,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(v),ue,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ue,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,C)}else{let W=v.textures;for(let K=0;K<W.length;K++){let ue=W[K],ae=s.convert(ue.format,ue.colorSpace),$=s.convert(ue.type),j=y(ue.internalFormat,ae,$,ue.normalized,ue.colorSpace);pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(v),j,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(v),j,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(C,v,B){let W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v.depthTexture);let de=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type),pe;v.depthTexture.format===tr?pe=r.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(pe=r.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,v.width,v.height,0,de,Ee,null)}}else Z(v.depthTexture,0);let ue=K.__webglTexture,ae=qe(v),$=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,j=v.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===tr)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ue,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ue,0);else if(v.depthTexture.format===cs)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ue,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(C){let v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=W}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Se(v.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Se(v.__webglFramebuffer[0],C,0):Se(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=r.createRenderbuffer(),lt(v.__webglDepthbuffer[W],C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ue)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),lt(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(C,v,B){let W=n.get(C);v!==void 0&&Te(W.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ze(C)}function He(C){let v=C.texture,B=n.get(C),W=n.get(v);C.addEventListener("dispose",x);let K=C.textures,ue=C.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=v.version,o.memory.textures++),ue){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let j=0;j<v.mipmaps.length;j++)B.__webglFramebuffer[$][j]=r.createFramebuffer()}else B.__webglFramebuffer[$]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[$]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ae)for(let $=0,j=K.length;$<j;$++){let de=n.get(K[$]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let j=K[$];B.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let de=s.convert(j.format,j.colorSpace),Ee=s.convert(j.type),pe=y(j.internalFormat,de,Ee,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),fe=qe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,B.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Te(B.__webglFramebuffer[$][j],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Te(B.__webglFramebuffer[$],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(v)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let $=0,j=K.length;$<j;$++){let de=K[$],Ee=n.get(de),pe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ee.__webglTexture),ke(pe,de),Te(B.__webglFramebuffer,C,de,r.COLOR_ATTACHMENT0+$,pe,0),g(de)&&M(pe)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),ke($,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Te(B.__webglFramebuffer[j],C,v,r.COLOR_ATTACHMENT0,$,j);else Te(B.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,$,0);g(v)&&M($),t.unbindTexture()}C.depthBuffer&&ze(C)}function q(C){let v=C.textures;for(let B=0,W=v.length;B<W;B++){let K=v[B];if(g(K)){let ue=A(C),ae=n.get(K).__webglTexture;t.bindTexture(ue,ae),M(ue),t.unbindTexture()}}}let ft=[],Mt=[];function Ct(C){if(C.samples>0){if(pt(C)===!1){let v=C.textures,B=C.width,W=C.height,K=r.COLOR_BUFFER_BIT,ue=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(C),$=v.length>1;if($)for(let de=0;de<v.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<v.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ee=n.get(v[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,B,W,0,0,B,W,K,r.NEAREST),l===!0&&(ft.length=0,Mt.length=0,ft.push(r.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ft.push(ue),Mt.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<v.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ee=n.get(v[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function qe(C){return Math.min(i.maxSamples,C.samples)}function pt(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function kt(C,v){let B=C.colorSpace,W=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==kn&&B!==Lr&&(tt.getTransfer(B)===mt?(W!==pi||K!==ti)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),v}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.getTextureUnits=z,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=L,this.setTextureCube=le,this.rebindTextures=We,this.setupRenderTarget=He,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lT(r,e){function t(n,i=Lr){let s,o=tt.getTransfer(i);if(n===ti)return r.UNSIGNED_BYTE;if(n===ou)return r.UNSIGNED_SHORT_4_4_4_4;if(n===au)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wf)return r.BYTE;if(n===Xf)return r.SHORT;if(n===Jo)return r.UNSIGNED_SHORT;if(n===su)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===di)return r.FLOAT;if(n===ar)return r.HALF_FLOAT;if(n===Zf)return r.ALPHA;if(n===Kf)return r.RGB;if(n===pi)return r.RGBA;if(n===tr)return r.DEPTH_COMPONENT;if(n===cs)return r.DEPTH_STENCIL;if(n===lu)return r.RED;if(n===cu)return r.RED_INTEGER;if(n===us)return r.RG;if(n===uu)return r.RG_INTEGER;if(n===hu)return r.RGBA_INTEGER;if(n===cl||n===ul||n===hl||n===fl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===xu||n===vu||n===yu||n===dl||n===Mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===_u)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vu)return s.COMPRESSED_R11_EAC;if(n===yu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===dl)return s.COMPRESSED_RG11_EAC;if(n===Mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Su||n===bu||n===Tu||n===wu||n===Eu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Su)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Au)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ru)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ou||n===Fu||n===Bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ou)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===zu||n===pl||n===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ku)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var cT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fi({vertexShader:cT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_d=class extends nr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null,_=typeof XRWebGLBinding<"u",p=new gd,g={},M=t.getContextAttributes(),A=null,y=null,S=[],E=[],T=new je,x=null,b=new rn;b.viewport=new vt;let R=new rn;R.viewport=new vt;let I=[b,R],P=new eu,H=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=S[J];return oe===void 0&&(oe=new Fo,S[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=S[J];return oe===void 0&&(oe=new Fo,S[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=S[J];return oe===void 0&&(oe=new Fo,S[J]=oe),oe.getHandSpace()};function U(J){let oe=E.indexOf(J.inputSource);if(oe===-1)return;let ie=S[oe];ie!==void 0&&(ie.update(J.inputSource,J.frame,c||o),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let J=0;J<S.length;J++){let oe=E[J];oe!==null&&(E[J]=null,S[J].disconnect(oe))}H=null,z=null,p.reset();for(let J in g)delete g[J];e.setRenderTarget(A),d=null,h=null,f=null,i=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ae=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=M.stencil?cs:tr,Ae=M.stencil?$o:Xi);let Te={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Te),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new hi(h.textureWidth,h.textureHeight,{format:pi,type:ti,depthTexture:new wr(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hi(d.framebufferWidth,d.framebufferHeight,{format:pi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(J){for(let oe=0;oe<J.removed.length;oe++){let ie=J.removed[oe],Ae=E.indexOf(ie);Ae>=0&&(E[Ae]=null,S[Ae].disconnect(ie))}for(let oe=0;oe<J.added.length;oe++){let ie=J.added[oe],Ae=E.indexOf(ie);if(Ae===-1){for(let Te=0;Te<S.length;Te++)if(Te>=E.length){E.push(ie),Ae=Te;break}else if(E[Te]===null){E[Te]=ie,Ae=Te;break}if(Ae===-1)break}let Fe=S[Ae];Fe&&Fe.connect(ie)}}let Z=new k,ee=new k;function L(J,oe,ie){Z.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ie.matrixWorld);let Ae=Z.distanceTo(ee),Fe=oe.projectionMatrix.elements,Te=ie.projectionMatrix.elements,lt=Fe[14]/(Fe[10]-1),Se=Fe[14]/(Fe[10]+1),ze=(Fe[9]+1)/Fe[5],We=(Fe[9]-1)/Fe[5],He=(Fe[8]-1)/Fe[0],q=(Te[8]+1)/Te[0],ft=lt*He,Mt=lt*q,Ct=Ae/(-He+q),qe=Ct*-He;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let pt=lt+Ct,N=Se+Ct,kt=ft-qe,Ge=Mt+(Ae-qe),C=ze*Se/N*pt,v=We*Se/N*pt;J.projectionMatrix.makePerspective(kt,Ge,C,v,pt,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let oe=J.near,ie=J.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),P.near=R.near=b.near=oe,P.far=R.far=b.far=ie,(H!==P.near||z!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,z=P.far),P.layers.mask=J.layers.mask|6,b.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Ae=J.parent,Fe=P.cameras;le(P,Ae);for(let Te=0;Te<Fe.length;Te++)le(Fe[Te],Ae);Fe.length===2?L(P,b,R):P.projectionMatrix.copy(b.projectionMatrix),_e(J,P,Ae)};function _e(J,oe,ie){ie===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Us*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(J){return g[J]};let Ke=null;function Xe(J,oe){if(u=oe.getViewerPose(c||o),m=oe,u!==null){let ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ae=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,Ae=!0);for(let Se=0;Se<ie.length;Se++){let ze=ie[Se],We=null;if(d!==null)We=d.getViewport(ze);else{let q=f.getViewSubImage(h,ze);We=q.viewport,Se===0&&(e.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(y))}let He=I[Se];He===void 0&&(He=new rn,He.layers.enable(Se),He.viewport=new vt,I[Se]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),Se===0&&(P.matrix.copy(He.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ae===!0&&P.cameras.push(He)}let Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Se=f.getDepthInformation(ie[0]);Se&&Se.isValid&&Se.texture&&p.init(Se,i.renderState)}if(Fe&&Fe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Se=0;Se<ie.length;Se++){let ze=ie[Se].camera;if(ze){let We=g[ze];We||(We=new Ka,g[ze]=We);let He=f.getCameraImage(ze);We.sourceTexture=He}}}}for(let ie=0;ie<S.length;ie++){let Ae=E[ie],Fe=S[ie];Ae!==null&&Fe!==void 0&&Fe.update(Ae,oe,c||o)}Ke&&Ke(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}let ke=new a_;ke.setAnimationLoop(Xe),this.setAnimationLoop=function(J){Ke=J},this.dispose=function(){}}},hT=new $e,d_=new Ze;d_.set(-1,0,0,0,1,0,0,0,1);function fT(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Qf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,A):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=e.get(g),A=M.envMap,y=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(hT.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(d_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dT(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let E=S.program;n.uniformBlockBinding(y,E)}function c(y,S){let E=i[y.id];E===void 0&&(p(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",M));let T=S.program;n.updateUBOMapping(y,T);let x=e.render.frame;s[y.id]!==x&&(h(y),s[y.id]=x)}function u(y){let S=f();y.__bindingPointIndex=S;let E=r.createBuffer(),T=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,T,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=i[y.id],E=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,b=E.length;x<b;x++){let R=E[x];if(Array.isArray(R))for(let I=0,P=R.length;I<P;I++)d(R[I],x,I,T);else d(R,x,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,S,E,T){if(_(y,S,E,T)===!0){let x=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let I=0;I<b.length;I++){let P=b[I],H=g(P);m(P,y.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function m(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function _(y,S,E,T){let x=y.value,b=S+"_"+E;if(T[b]===void 0)return typeof x=="number"||typeof x=="boolean"?T[b]=x:ArrayBuffer.isView(x)?T[b]=x.slice():T[b]=x.clone(),!0;{let R=T[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let S=y.uniforms,E=0,T=16;for(let b=0,R=S.length;b<R;b++){let I=Array.isArray(S[b])?S[b]:[S[b]];for(let P=0,H=I.length;P<H;P++){let z=I[P],U=Array.isArray(z.value)?z.value:[z.value];for(let V=0,O=U.length;V<O;V++){let Z=U[V],ee=g(Z),L=E%T,le=L%ee.boundary,_e=L+le;E+=le,_e!==0&&T-_e<ee.storage&&(E+=T-_e),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=ee.storage}}}let x=E%T;return x>0&&(E+=T-x),y.__size=E,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var pT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),lr=null;function mT(){return lr===null&&(lr=new Vo(pT,16,16,us,ar),lr.name="DFG_LUT",lr.minFilter=$t,lr.magFilter=$t,lr.wrapS=Ei,lr.wrapT=Ei,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}var Yu=class{constructor(e={}){let{canvas:t=Lg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ti}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([hu,uu,cu]),g=new Set([ti,Xi,Jo,$o,ou,au]),M=new Uint32Array(4),A=new Int32Array(4),y=new k,S=null,E=null,T=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,P=null,H=null,z=null,U=null;this._outputColorSpace=Kt;let V=0,O=0,Z=null,ee=-1,L=null,le=new vt,_e=new vt,Ke=null,Xe=new Be(0),ke=0,J=t.width,oe=t.height,ie=1,Ae=null,Fe=null,Te=new vt(0,0,J,oe),lt=new vt(0,0,J,oe),Se=!1,ze=new Go,We=!1,He=!1,q=new $e,ft=new k,Mt=new vt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function pt(){return Z===null?ie:1}let N=n;function kt(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),N===null){let F="webgl2";if(N=kt(F,w),N===null)throw kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ve("WebGLRenderer: "+w.message),w}let Ge,C,v,B,W,K,ue,ae,$,j,de,Ee,pe,fe,ce,Ie,Ne,D,he,Q,me,ge,te;function re(){Ge=new SS(N),Ge.init(),me=new lT(N,Ge),C=new pS(N,Ge,e,me),v=new oT(N,Ge),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),H=N.createFramebuffer(),z=N.createFramebuffer(),U=N.createFramebuffer(),B=new wS(N),W=new qb,K=new aT(N,Ge,v,W,C,me,B),ue=new MS(R),ae=new Cv(N),ge=new fS(N,ae),$=new bS(N,ae,B,ge),j=new AS(N,$,ae,ge,B),D=new ES(N,C,K),ce=new mS(W),de=new Xb(R,ue,Ge,C,ge,ce),Ee=new fT(R,W),pe=new Zb,fe=new eT(Ge),Ne=new hS(R,ue,v,j,m,l),Ie=new sT(R,j,C),te=new dT(N,B,C,v),he=new dS(N,Ge,B),Q=new TS(N,Ge,B),B.programs=de.programs,R.capabilities=C,R.extensions=Ge,R.properties=W,R.renderLists=pe,R.shadowMap=Ie,R.state=v,R.info=B}re(),_!==ti&&(b=new CS(_,t.width,t.height,a,i,s));let ne=new _d(R,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(J,oe,!1))},this.getSize=function(w){return w.set(J,oe)},this.setSize=function(w,F,Y=!0){if(ne.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,oe=F,t.width=Math.floor(w*ie),t.height=Math.floor(F*ie),Y===!0&&(t.style.width=w+"px",t.style.height=F+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(J*ie,oe*ie).floor()},this.setDrawingBufferSize=function(w,F,Y){J=w,oe=F,ie=Y,t.width=Math.floor(w*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(_===ti){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(le)},this.getViewport=function(w){return w.copy(Te)},this.setViewport=function(w,F,Y,G){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,F,Y,G),v.viewport(le.copy(Te).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,F,Y,G){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,F,Y,G),v.scissor(_e.copy(lt).multiplyScalar(ie).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){v.setScissorTest(Se=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Fe=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Y=!0){let G=0;if(w){let X=!1;if(Z!==null){let xe=Z.texture.format;X=p.has(xe)}if(X){let xe=Z.texture.type,ve=g.has(xe),Me=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Le=Me.r,Je=Me.g,et=Me.b;ve?(M[0]=Le,M[1]=Je,M[2]=et,M[3]=Ce,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=Le,A[1]=Je,A[2]=et,A[3]=Ce,N.clearBufferiv(N.COLOR,0,A))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),P=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ne.dispose(),pe.dispose(),fe.dispose(),W.dispose(),ue.dispose(),j.dispose(),ge.dispose(),te.dispose(),de.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Dt),ne.removeEventListener("sessionend",bt),ut.stop()};function Ue(w){w.preventDefault(),ka("WebGLRenderer: Context Lost."),I=!0}function se(){ka("WebGLRenderer: Context Restored."),I=!1;let w=B.autoReset,F=Ie.enabled,Y=Ie.autoUpdate,G=Ie.needsUpdate,X=Ie.type;re(),B.autoReset=w,Ie.enabled=F,Ie.autoUpdate=Y,Ie.needsUpdate=G,Ie.type=X}function Oe(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){let F=w.target;F.removeEventListener("dispose",Re),Ye(F)}function Ye(w){en(w),W.remove(w)}function en(w){let F=W.get(w).programs;F!==void 0&&(F.forEach(function(Y){de.releaseProgram(Y)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Y,G,X,xe){F===null&&(F=Ct);let ve=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=pn(w,F,Y,G,X);v.setMaterial(G,ve);let Ce=Y.index,Le=1;if(G.wireframe===!0){if(Ce=$.getWireframeAttribute(Y),Ce===void 0)return;Le=2}let Je=Y.drawRange,et=Y.attributes.position,De=Je.start*Le,St=(Je.start+Je.count)*Le;xe!==null&&(De=Math.max(De,xe.start*Le),St=Math.min(St,(xe.start+xe.count)*Le)),Ce!==null?(De=Math.max(De,0),St=Math.min(St,Ce.count)):et!=null&&(De=Math.max(De,0),St=Math.min(St,et.count));let Yt=St-De;if(Yt<0||Yt===1/0)return;ge.setup(X,G,Me,Y,Ce);let Vt,Tt=he;if(Ce!==null&&(Vt=ae.get(Ce),Tt=Q,Tt.setIndex(Vt)),X.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*pt()),Tt.setMode(N.LINES)):Tt.setMode(N.TRIANGLES);else if(X.isLine){let wn=G.linewidth;wn===void 0&&(wn=1),v.setLineWidth(wn*pt()),X.isLineSegments?Tt.setMode(N.LINES):X.isLineLoop?Tt.setMode(N.LINE_LOOP):Tt.setMode(N.LINE_STRIP)}else X.isPoints?Tt.setMode(N.POINTS):X.isSprite&&Tt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let wn=X._multiDrawStarts,be=X._multiDrawCounts,ai=X._multiDrawCount,dt=Ce?ae.get(Ce).bytesPerElement:1,Ti=W.get(G).currentProgram.getUniforms();for(let Ji=0;Ji<ai;Ji++)Ti.setValue(N,"_gl_DrawID",Ji),Tt.render(wn[Ji]/dt,be[Ji])}else if(X.isInstancedMesh)Tt.renderInstances(De,Yt,X.count);else if(Y.isInstancedBufferGeometry){let wn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,wn);Tt.renderInstances(De,Yt,be)}else Tt.render(De,Yt)};function st(w,F,Y){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,zt(w,F,Y),w.side=Vi,w.needsUpdate=!0,zt(w,F,Y),w.side=Ai):zt(w,F,Y)}this.compile=function(w,F,Y=null){Y===null&&(Y=w),E=fe.get(Y),E.init(F),x.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();let G=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let ve=0;ve<xe.length;ve++){let Me=xe[ve];st(Me,Y,X),G.add(Me)}else st(xe,Y,X),G.add(xe)}),E=x.pop(),G},this.compileAsync=function(w,F,Y=null){let G=this.compile(w,F,Y);return new Promise(X=>{function xe(){if(G.forEach(function(ve){W.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){X(w);return}setTimeout(xe,10)}Ge.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Lt=null;function dn(w){Lt&&Lt(w)}function Dt(){ut.stop()}function bt(){ut.start()}let ut=new a_;ut.setAnimationLoop(dn),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(w){Lt=w,ne.setAnimationLoop(w),w===null?ut.stop():ut.start()},ne.addEventListener("sessionstart",Dt),ne.addEventListener("sessionend",bt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(w,F);let Y=ne.enabled===!0&&ne.isPresenting===!0,G=b!==null&&(Z===null||Y)&&b.begin(R,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,Z),E=fe.get(w,x.length),E.init(F),E.state.textureUnits=K.getTextureUnits(),x.push(E),q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(q,ki,F.reversedDepth),He=this.localClippingEnabled,We=ce.init(this.clippingPlanes,He),S=pe.get(w,T.length),S.init(),T.push(S),ne.enabled===!0&&ne.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&On(ve,F,-1/0,R.sortObjects)}On(w,F,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(Ae,Fe,F.reversedDepth),qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,qe&&Ne.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&ce.beginShadows();let X=E.state.shadowsArray;if(Ie.render(X,w,F),We===!0&&ce.endShadows(),(G&&b.hasRenderPass())===!1){let ve=S.opaque,Me=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Ce=F.cameras;if(Me.length>0)for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le];Tn(ve,Me,w,et)}qe&&Ne.render(w);for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le];Pt(S,w,et,et.viewport)}}else Me.length>0&&Tn(ve,Me,w,F),qe&&Ne.render(w),Pt(S,w,F)}Z!==null&&O===0&&(K.updateMultisampleRenderTarget(Z),K.updateRenderTargetMipmap(Z)),G&&b.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),ge.resetDefaultState(),ee=-1,L=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),We===!0&&ce.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,P!==null&&P.renderEnd()};function On(w,F,Y,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){G&&Mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);let ve=j.update(w),Me=w.material;Me.visible&&S.push(w,ve,Me,Y,Mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){let ve=j.update(w),Me=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Mt.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Mt.copy(ve.boundingSphere.center)),Mt.applyMatrix4(w.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){let Ce=ve.groups;for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le],De=Me[et.materialIndex];De&&De.visible&&S.push(w,ve,De,Y,Mt.z,et)}}else Me.visible&&S.push(w,ve,Me,Y,Mt.z,null)}}let xe=w.children;for(let ve=0,Me=xe.length;ve<Me;ve++)On(xe[ve],F,Y,G)}function Pt(w,F,Y,G){let{opaque:X,transmissive:xe,transparent:ve}=w;E.setupLightsView(Y),We===!0&&ce.setGlobalState(R.clippingPlanes,Y),G&&v.viewport(le.copy(G)),X.length>0&&Fn(X,F,Y),xe.length>0&&Fn(xe,F,Y),ve.length>0&&Fn(ve,F,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Tn(w,F,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let De=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:De?ar:ti,minFilter:Wi,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let xe=E.state.transmissionRenderTarget[G.id],ve=G.viewport||le;xe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Xe),ke=R.getClearAlpha(),ke<1&&R.setClearColor(16777215,.5),R.clear(),qe&&Ne.render(Y);let Je=R.toneMapping;R.toneMapping=Hi;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),We===!0&&ce.setGlobalState(R.clippingPlanes,G),Fn(w,Y,G),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let St=0,Yt=F.length;St<Yt;St++){let Vt=F[St],{object:Tt,geometry:wn,material:be,group:ai}=Vt;if(be.side===Ai&&Tt.layers.test(G.layers)){let dt=be.side;be.side=yn,be.needsUpdate=!0,tn(Tt,Y,G,wn,be,ai),be.side=dt,be.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}R.setRenderTarget(Me,Ce,Le),R.setClearColor(Xe,ke),et!==void 0&&(G.viewport=et),R.toneMapping=Je}function Fn(w,F,Y){let G=F.isScene===!0?F.overrideMaterial:null;for(let X=0,xe=w.length;X<xe;X++){let ve=w[X],{object:Me,geometry:Ce,group:Le}=ve,Je=ve.material;Je.allowOverride===!0&&G!==null&&(Je=G),Me.layers.test(Y.layers)&&tn(Me,F,Y,Ce,Je,Le)}}function tn(w,F,Y,G,X,xe){w.onBeforeRender(R,F,Y,G,X,xe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,F,Y,G,w,xe),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=yn,X.needsUpdate=!0,R.renderBufferDirect(Y,F,G,X,w,xe),X.side=Vi,X.needsUpdate=!0,R.renderBufferDirect(Y,F,G,X,w,xe),X.side=Ai):R.renderBufferDirect(Y,F,G,X,w,xe),w.onAfterRender(R,F,Y,G,X,xe)}function zt(w,F,Y){F.isScene!==!0&&(F=Ct);let G=W.get(w),X=E.state.lights,xe=E.state.shadowsArray,ve=X.state.version,Me=de.getParameters(w,X.state,xe,F,Y,E.state.lightProbeGridArray),Ce=de.getProgramCacheKey(Me),Le=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=ue.get(w.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Re),Le=new Map,G.programs=Le);let et=Le.get(Ce);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===ve)return Ki(w,Me),et}else Me.uniforms=de.getUniforms(w),P!==null&&w.isNodeMaterial&&P.build(w,Y,Me),w.onBeforeCompile(Me,R),et=de.acquireProgram(Me,Ce),Le.set(Ce,et),G.uniforms=Me.uniforms;let De=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ce.uniform),Ki(w,Me),G.needsLights=bi(w),G.lightsStateVersion=ve,G.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function an(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Ki(w,F){let Y=W.get(w);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function po(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Y=0,G=w.length;Y<G;Y++){let X=w[Y];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function pn(w,F,Y,G,X){F.isScene!==!0&&(F=Ct),K.resetTextureUnits();let xe=F.fog,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Me=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tt.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=ue.get(G.envMap||ve,Ce),Je=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color,Vt=Hi;G.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Vt=R.toneMapping);let Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wn=Tt!==void 0?Tt.length:0,be=W.get(G),ai=E.state.lights;if(We===!0&&(He===!0||w!==L)){let It=w===L&&G.id===ee;ce.setState(G,w,It)}let dt=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ai.state.version||be.outputColorSpace!==Me||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Le||G.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ce.numPlanes||be.numIntersection!==ce.numIntersection)||be.vertexAlphas!==Je||be.vertexTangents!==et||be.morphTargets!==De||be.morphNormals!==St||be.morphColors!==Yt||be.toneMapping!==Vt||be.morphTargetsCount!==wn||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,be.__version=G.version);let Ti=be.currentProgram;dt===!0&&(Ti=zt(G,F,X),P&&G.isNodeMaterial&&P.onUpdateProgram(G,Ti,be));let Ji=!1,Wr=!1,mo=!1,wt=Ti.getUniforms(),Zt=be.uniforms;if(v.useProgram(Ti.program)&&(Ji=!0,Wr=!0,mo=!0),G.id!==ee&&(ee=G.id,Wr=!0),be.needsLights){let It=po(E.state.lightProbeGridArray,X);be.lightProbeGrid!==It&&(be.lightProbeGrid=It,Wr=!0)}if(Ji||L!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),wt.setValue(N,"projectionMatrix",w.projectionMatrix),wt.setValue(N,"viewMatrix",w.matrixWorldInverse);let qr=wt.map.cameraPosition;qr!==void 0&&qr.setValue(N,ft.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Wr=!0,mo=!0)}if(be.needsLights&&(ai.state.directionalShadowMap.length>0&&wt.setValue(N,"directionalShadowMap",ai.state.directionalShadowMap,K),ai.state.spotShadowMap.length>0&&wt.setValue(N,"spotShadowMap",ai.state.spotShadowMap,K),ai.state.pointShadowMap.length>0&&wt.setValue(N,"pointShadowMap",ai.state.pointShadowMap,K)),X.isSkinnedMesh){wt.setOptional(N,X,"bindMatrix"),wt.setOptional(N,X,"bindMatrixInverse");let It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),wt.setValue(N,"boneTexture",It.boneTexture,K))}X.isBatchedMesh&&(wt.setOptional(N,X,"batchingTexture"),wt.setValue(N,"batchingTexture",X._matricesTexture,K),wt.setOptional(N,X,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",X._indirectTexture,K),wt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",X._colorsTexture,K));let Xr=Y.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&D.update(X,Y,Ti),(Wr||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,wt.setValue(N,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=mT()),Wr){if(wt.setValue(N,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&qt(Zt,mo),xe&&G.fog===!0&&Ee.refreshFogUniforms(Zt,xe),Ee.refreshMaterialUniforms(Zt,G,ie,oe,E.state.transmissionRenderTarget[w.id]),be.needsLights&&be.lightProbeGrid){let It=be.lightProbeGrid;Zt.probesSH.value=It.texture,Zt.probesMin.value.copy(It.boundingBox.min),Zt.probesMax.value.copy(It.boundingBox.max),Zt.probesResolution.value.copy(It.resolution)}ea.upload(N,an(be),Zt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ea.upload(N,an(be),Zt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(N,"center",X.center),wt.setValue(N,"modelViewMatrix",X.modelViewMatrix),wt.setValue(N,"normalMatrix",X.normalMatrix),wt.setValue(N,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let It=G.uniformsGroups;for(let qr=0,go=It.length;qr<go;qr++){let gm=It[qr];te.update(gm,Ti),te.bind(gm,Ti)}}return Ti}function qt(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function bi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,F,Y){let G=W.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=F,W.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Y=W.get(w);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Y=0){Z=w,V=F,O=Y;let G=null,X=!1,xe=!1;if(w){let Me=W.get(w);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Me.__webglFramebuffer),le.copy(w.viewport),_e.copy(w.scissor),Ke=w.scissorTest,v.viewport(le),v.scissor(_e),v.setScissorTest(Ke),ee=-1;return}else if(Me.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Me.__hasExternalTextures)K.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Je=w.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&W.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}let Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);let Le=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?G=Le[F][Y]:G=Le[F],X=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?G=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,le.copy(w.viewport),_e.copy(w.scissor),Ke=w.scissorTest}else le.copy(Te).multiplyScalar(ie).floor(),_e.copy(lt).multiplyScalar(ie).floor(),Ke=Se;if(Y!==0&&(G=H),v.bindFramebuffer(N.FRAMEBUFFER,G)&&v.drawBuffers(w,G),v.viewport(le),v.scissor(_e),v.setScissorTest(Ke),X){let Me=W.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,Y)}else if(xe){let Me=F;for(let Ce=0;Ce<w.textures.length;Ce++){let Le=W.get(w.textures[Ce]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,Y,Me)}}else if(w!==null&&Y!==0){let Me=W.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me.__webglTexture,Y)}ee=-1},this.readRenderTargetPixels=function(w,F,Y,G,X,xe,ve,Me=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){v.bindFramebuffer(N.FRAMEBUFFER,Ce);try{let Le=w.textures[Me],Je=Le.format,et=Le.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(Je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(et)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&Y>=0&&Y<=w.height-X&&N.readPixels(F,Y,G,X,me.convert(Je),me.convert(et),xe)}finally{let Le=Z!==null?W.get(Z).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,F,Y,G,X,xe,ve,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce)if(F>=0&&F<=w.width-G&&Y>=0&&Y<=w.height-X){v.bindFramebuffer(N.FRAMEBUFFER,Ce);let Le=w.textures[Me],Je=Le.format,et=Le.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(F,Y,G,X,me.convert(Je),me.convert(et),0);let St=Z!==null?W.get(Z).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,St);let Yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ng(N,Yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.deleteBuffer(De),N.deleteSync(Yt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Y=0){let G=Math.pow(2,-Y),X=Math.floor(w.image.width*G),xe=Math.floor(w.image.height*G),ve=F!==null?F.x:0,Me=F!==null?F.y:0;K.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,ve,Me,X,xe),v.unbindTexture()},this.copyTextureToTexture=function(w,F,Y=null,G=null,X=0,xe=0){let ve,Me,Ce,Le,Je,et,De,St,Yt,Vt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(Y!==null)ve=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Je=Y.min.y,et=Y.isBox3?Y.min.z:0;else{let Zt=Math.pow(2,-X);ve=Math.floor(Vt.width*Zt),Me=Math.floor(Vt.height*Zt),w.isDataArrayTexture?Ce=Vt.depth:w.isData3DTexture?Ce=Math.floor(Vt.depth*Zt):Ce=1,Le=0,Je=0,et=0}G!==null?(De=G.x,St=G.y,Yt=G.z):(De=0,St=0,Yt=0);let Tt=me.convert(F.format),wn=me.convert(F.type),be;F.isData3DTexture?(K.setTexture3D(F,0),be=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),be=N.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),be=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let ai=v.getParameter(N.UNPACK_ROW_LENGTH),dt=v.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=v.getParameter(N.UNPACK_SKIP_PIXELS),Ji=v.getParameter(N.UNPACK_SKIP_ROWS),Wr=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Vt.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Vt.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(N.UNPACK_SKIP_ROWS,Je),v.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let mo=w.isDataArrayTexture||w.isData3DTexture,wt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Zt=W.get(w),Xr=W.get(F),It=W.get(Zt.__renderTarget),qr=W.get(Xr.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,It.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let go=0;go<Ce;go++)mo&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(w).__webglTexture,X,et+go),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(F).__webglTexture,xe,Yt+go)),N.blitFramebuffer(Le,Je,ve,Me,De,St,ve,Me,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||W.has(w)){let Zt=W.get(w),Xr=W.get(F);v.bindFramebuffer(N.READ_FRAMEBUFFER,z),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let It=0;It<Ce;It++)mo?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,X,et+It):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Zt.__webglTexture,X),wt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xr.__webglTexture,xe,Yt+It):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xr.__webglTexture,xe),X!==0?N.blitFramebuffer(Le,Je,ve,Me,De,St,ve,Me,N.COLOR_BUFFER_BIT,N.NEAREST):wt?N.copyTexSubImage3D(be,xe,De,St,Yt+It,Le,Je,ve,Me):N.copyTexSubImage2D(be,xe,De,St,Le,Je,ve,Me);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else wt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(be,xe,De,St,Yt,ve,Me,Ce,Tt,wn,Vt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(be,xe,De,St,Yt,ve,Me,Ce,Tt,Vt.data):N.texSubImage3D(be,xe,De,St,Yt,ve,Me,Ce,Tt,wn,Vt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,De,St,ve,Me,Tt,wn,Vt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,De,St,Vt.width,Vt.height,Tt,Vt.data):N.texSubImage2D(N.TEXTURE_2D,xe,De,St,ve,Me,Tt,wn,Vt);v.pixelStorei(N.UNPACK_ROW_LENGTH,ai),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),v.pixelStorei(N.UNPACK_SKIP_ROWS,Ji),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Wr),xe===0&&F.generateMipmaps&&N.generateMipmap(be),v.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){V=0,O=0,Z=null,v.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function xd(r,e){if(e===Jf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===jo||e===ml){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===jo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function p_(r){let e=new Map,t=new Map,n=r.clone();return m_(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function m_(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)m_(r.children[n],e.children[n],t)}var Ju=class extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new $u(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $u(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bd(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ir.extractUrlBase(e);o=Ir.resolveURL(c,this.path)}else o=Ir.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===y_){try{o[ot.KHR_BINARY_GLTF]=new kd(e)}catch(f){i&&i(f);return}s=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ot.KHR_MATERIALS_UNLIT:o[f]=new bd;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[f]=new zd(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[f]=new Vd;break;case ot.KHR_MESH_QUANTIZATION:o[f]=new Gd;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function _T(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function jt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sd=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pr(u),c.distance=f;break;case"spot":c=new os(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ur(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},bd=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Gi}extendParams(e,t,n){let i=[];e.color=new Be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Kt))}return Promise.all(i)}},Td=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(i)}},Ed=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ad=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Rd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],kn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Kt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Cd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Pd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(s[0],s[1],s[2],kn),Promise.all(i)}},Id=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ld=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(s[0],s[1],s[2],kn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Kt)),Promise.all(i)}},Dd=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Nd=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ud=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Od=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Fd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$u=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}},Bd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ri.TRIANGLES&&c.mode!==Ri.TRIANGLE_STRIP&&c.mode!==Ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let m of f){let _=new $e,p=new k,g=new ui,M=new k(1,1,1),A=new Bs(m.geometry,m.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),A.setMatrixAt(y,_.compose(p,g,M));for(let y in l)if(y==="_COLOR_0"){let S=l[y];A.instanceColor=new ts(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Nt.prototype.copy.call(A,m),this.parser.assignFinalMaterial(A),d.push(A)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},y_="glTF",yl=12,g_={JSON:1313821514,BIN:5130562},kd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-yl,s=new DataView(e,yl),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===g_.JSON){let c=new Uint8Array(e,yl+o,a);this.content=n.decode(c)}else if(l===g_.BIN){let c=yl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Wd[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Wd[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=ia[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let _=d.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}f(d)},a,c,kn,h)})})}},Vd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Gd=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},ju=class extends rr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,m=e*c,_=m-c,p=-2*d+3*h,g=d-h,M=1-p,A=g-h+f;for(let y=0;y!==a;y++){let S=o[_+y+a],E=o[_+y+l]*u,T=o[m+y+a],x=o[m+y]*u;s[y]=M*S+A*E+p*T+g*x}return s}},xT=new ui,Hd=class extends ju{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return xT.fromArray(s).normalize().toArray(s),s}},Ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},__={9728:Jt,9729:$t,9984:ru,9985:Ko,9986:Hs,9987:Wi},x_={33071:Ei,33648:Lo,10497:er},vd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vT={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Ds},yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),r.DefaultMaterial}function Ys(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ur(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MT(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function ST(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bT(r){let e,t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Md(t.attributes):e=r.indices+":"+Md(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Md(r.targets[n]);return e}function Md(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Xd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wT=new $e,qd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _T,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new el(this.options.manager):this.textureLoader=new il(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ys(s,a,i),ur(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Ir.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=vd[i.type],a=ia[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gt(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=vd[i.type],c=ia[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,p;if(d&&d!==f){let g=Math.floor(h/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,A=t.cache.get(M);A||(_=new c(a,g*d,i.count*d/u),A=new Bo(_,d/u),t.cache.add(M,A)),p=new ko(A,l,h%d/u,m)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),p=new Gt(_,l,m);if(i.sparse!==void 0){let g=vd.SCALAR,M=ia[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new M(o[1],A,i.sparse.count*g),E=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new Gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,x=S.length;T<x;T++){let b=S[T];if(p.setX(b,E[T*l]),l>=2&&p.setY(b,E[T*l+1]),l>=3&&p.setZ(b,E[T*l+2]),l>=4&&p.setW(b,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(s.samplers||{})[o.sampler]||{};return u.magFilter=__[h.magFilter]||$t,u.minFilter=__[h.minFilter]||Wi,u.wrapS=x_[h.wrapS]||er,u.wrapT=x_[h.wrapT]||er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==$t,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){let p=new ln(_);p.needsUpdate=!0,h(p)}),t.load(Ir.resolveURL(f,s.path),m,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ur(f,o),f.userData.mimeType=o.mimeType||TT(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ns,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ho,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let f=i[ot.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{let f=s.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],kn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Kt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ai);let u=s.alphaMode||yd.OPAQUE;if(u===yd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===yd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Gi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Gi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Gi){let f=s.emissiveFactor;a.emissive=new Be().setRGB(f[0],f[1],f[2],kn)}return s.emissiveTexture!==void 0&&o!==Gi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Kt)),Promise.all(c).then(function(){let f=new o(a);return s.name&&(f.name=s.name),ur(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ys(i,f,s),f})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return v_(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=bT(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=v_(new _n,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?yT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,m=u.length;d<m;d++){let _=u[d],p=o[d],g,M=c[d];if(p.mode===Ri.TRIANGLES||p.mode===Ri.TRIANGLE_STRIP||p.mode===Ri.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Wa(_,M):new gt(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Ri.TRIANGLE_STRIP?g.geometry=xd(g.geometry,ml):p.mode===Ri.TRIANGLE_FAN&&(g.geometry=xd(g.geometry,jo));else if(p.mode===Ri.LINES)g=new qa(_,M);else if(p.mode===Ri.LINE_STRIP)g=new ks(_,M);else if(p.mode===Ri.LINE_LOOP)g=new Ya(_,M);else if(p.mode===Ri.POINTS)g=new zs(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&ST(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),ur(g,s),p.extensions&&Ys(i,g,p),t.assignFinalMaterial(g),f.push(g)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Ys(i,f[0],s),f[0];let h=new Jn;s.extensions&&Ys(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Ws.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new as(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ur(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new $e;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xa(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){let d=i.channels[f],m=i.samplers[d.sampler],_=d.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],m=f[2],_=f[3],p=f[4],g=[];for(let A=0,y=h.length;A<y;A++){let S=h[A],E=d[A],T=m[A],x=_[A],b=p[A];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,E,T,x,b);if(R)for(let I=0;I<R.length;I++)g.push(R[I])}let M=new Qa(s,void 0,g);return ur(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,wT)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,m=f[0];u.pivot=new k().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new zo:c.length>1?u=new Jn:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),ur(u,s),s.extensions&&Ys(n,u,s),s.matrix!==void 0){let f=new $e;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Jn;n.name&&(s.name=i.createUniqueName(n.name)),ur(s,n),n.extensions&&Ys(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?s.add(p_(h)):s.add(h)}let c=u=>{let f=new Map;for(let[h,d]of i.associations)(h instanceof Vn||h instanceof ln)&&f.set(h,d);return u.traverse(h=>{let d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}fs[s.path]===fs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(fs[s.path]){case fs.weights:u=Ar;break;case fs.rotation:u=Rr;break;case fs.translation:case fs.scale:u=ss;break;default:n.itemSize===1?u=Ar:u=ss;break}let f=i.interpolation!==void 0?vT[i.interpolation]:Ns,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let _=new u(l[d]+"."+fs[s.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Rr?Hd:ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ET(r,e,t){let n=e.attributes,i=new zn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){let u=Xd(ia[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new k,l=new k;for(let c=0,u=s.length;c<u;c++){let f=s[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){let _=Xd(ia[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new $n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function v_(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Wd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return tt.workingColorSpace!==kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),ur(r,e),ET(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?MT(r,e.targets,t):r})}var Qu=class extends Os{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new is;e.deleteAttribute("uv");let t=new jn({side:yn}),n=new jn,i=new Pr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Bs(e,n,6),a=new Nt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new gt(e,ra(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new gt(e,ra(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new gt(e,ra(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new gt(e,ra(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new gt(e,ra(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new gt(e,ra(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ra(r){return new $a({color:0,emissive:16777215,emissiveIntensity:r})}function Dr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function C_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},El={duration:.5,overwrite:!1,delay:0},up,Mn,Ut,Pi=1e8,Rt=1/Pi,ep=Math.PI*2,AT=ep/4,RT=0,P_=Math.sqrt,CT=Math.cos,PT=Math.sin,hn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},Ur=function(e){return typeof e=="number"},ch=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},hp=function(){return typeof window<"u"},eh=function(e){return Ht(e)||hn(e)},I_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,IT=/random\([^)]+\)/g,LT=/,\s*/g,M_=/(?:-?\.?\d|\.)+/gi,fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dp=/[+-]=-?[.\d]+/,DT=/[^,'"\[\]\s]+/gi,NT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,hr,tp,pp,gi={},rh={},L_,D_=function(e){return(rh=oa(e,gi))&&In},uh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Al=function(e,t){return!t&&console.warn(e)},N_=function(e,t){return e&&(gi[e]=t)&&rh&&(rh[e]=t)||gi},Rl=function(){return 0},UT={suppressEvents:!0,isStart:!0,kill:!1},th={suppressEvents:!0,kill:!1},OT={suppressEvents:!0},mp={},ps=[],np={},U_,ni={},Zd={},S_=30,nh=[],gp="",_p=function(e){var t=e[0],n,i;if(dr(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=nh.length;i--&&!nh[i].targetTest(t););n=nh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mp(e[i],n)))||e.splice(i,1);return e},ms=function(e){return e._gsap||_p(Ii(e))[0]._gsap},xp=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():ch(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},FT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sh=function(){var e=ps.length,t=ps.slice(0),n,i;for(np={},ps.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vp=function(e){return!!(e._initted||e._startAt||e.add)},O_=function(e,t,n,i){ps.length&&!Mn&&sh(),e.render(t,n,i||!!(Mn&&t<0&&vp(e))),ps.length&&!Mn&&sh()},F_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(DT).length<2?t:hn(e)?e.trim():e},B_=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},BT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},oa=function(e,t){for(var n in t)e[n]=t[n];return e},b_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=dr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},oh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},bl=function(e){var t=e.parent||Ft,n=e.keyframes?BT(Pn(e.keyframes)):_i;if(ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},k_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},hh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ip=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert(th):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},VT=function r(e){return!e||e._ts&&r(e.parent)},T_=function(e){return e._repeat?aa(e._tTime,e=e.duration()+e._rDelay)*e:0},aa=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},ah=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fh=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},dh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fh(e),n._dirty||Zs(n,e)),e},z_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ah(e.rawTime(),t),(!t._dur||Il(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},fr=function(e,t,n,i){return t.parent&&gs(t),t._start=Ot((Ur(n)?n:n||e!==Ft?Ci(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),k_(e,t,"_first","_last",e._sort?"_start":0),rp(t)||(e._recent=t),i||z_(e,t),e._ts<0&&dh(e,e._tTime),e},V_=function(e,t){return(gi.ScrollTrigger||uh("scrollTrigger",t))&&gi.ScrollTrigger.create(t,e)},G_=function(e,t,n,i,s){if(Tp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&U_!==ii.frame)return ps.push(e),e._lazy=[s,i],1},GT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},rp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&GT(e)&&!(!e._initted&&rp(e))||(e._ts<0||e._dp._ts<0)&&!rp(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Il(0,e._tDur,t),u=aa(l,a),e._yoyo&&u&1&&(o=1-o),u!==aa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&G_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ip(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&gs(e,1),!n&&!Mn&&(mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},WT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},la=function(e,t,n,i){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!i&&dh(e,e._tTime=e._tDur*a),e.parent&&fh(e),n||Zs(e.parent,e),e},w_=function(e){return e instanceof Cn?Zs(e):la(e,e._dur)},XT={_start:0,endTime:Rl,totalDuration:Rl},Ci=function r(e,t,n){var i=e.labels,s=e._recent||XT,o=e.duration()>=Pi?s.endTime(!1):e._dur,a,l,c;return hn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Tl=function(e,t,n){var i=Ur(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},_s=function(e,t){return e||e===0?t(e):t},Il=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!hn(e)||!(t=NT.exec(e))?"":t[1]},qT=function(e,t,n){return _s(n,function(i){return Il(e,t,i)})},sp=[].slice,H_=function(e,t){return e&&dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==hr},YT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return hn(i)&&!t||H_(i,1)?(s=n).push.apply(s,Ii(i)):n.push(i)})||n},Ii=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):hn(e)&&!n&&(tp||!ca())?sp.call((t||pp).querySelectorAll(e),0):Pn(e)?YT(e,n):H_(e)?sp.call(e,0):e?[e]:[]},op=function(e){return e=Ii(e)[0]||Al("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ii(t,n.querySelectorAll?n:n===e?Al("Invalid scope")||pp.createElement("div"):e)}},W_=function(e){return e.sort(function(){return .5-Math.random()})},X_=function(e){if(Ht(e))return e;var t=dr(e)?e:{each:e},n=Ks(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return hn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,m){var _=(m||t).length,p=o[_],g,M,A,y,S,E,T,x,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!b){for(T=-Pi;T<(T=m[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=o[_]=[],g=l?Math.min(b,_)*u-.5:i%b,M=b===Pi?0:l?_*f/b-.5:i/b|0,T=0,x=Pi,E=0;E<_;E++)A=E%b-g,y=M-(E/b|0),p[E]=S=c?Math.abs(c==="y"?y:A):P_(A*A+y*y),S>T&&(T=S),S<x&&(x=S);i==="random"&&W_(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Sn(t.amount||t.each)||0,n=n&&_<0?o1(n):n}return _=(p[h]-p.min)/p.max||0,Ot(p.b+(n?n(_):_)*p.v)+p.u}},ap=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ur(n)?0:Sn(n))}},q_=function(e,t){var n=Pn(e),i,s;return!n&&dr(e)&&(i=n=e.radius||Pi,e.values?(e=Ii(e.values),(s=!Ur(e[0]))&&(i*=i)):e=ap(e.increment)),_s(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ur(o)?u:u+Sn(o)}:ap(e))},Y_=function(e,t,n,i){return _s(Pn(e)?!t:n===!0?!!(n=0):!i,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ZT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},KT=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},JT=function(e,t,n){return K_(e,t,0,1,n)},Z_=function(e,t,n){return _s(n,function(i){return e[~~t(i)]})},$T=function r(e,t,n){var i=t-e;return Pn(e)?Z_(e,r(0,e.length),t):_s(n,function(s){return(i+(s-e)%i)%i+e})},jT=function r(e,t,n){var i=t-e,s=i*2;return Pn(e)?Z_(e,r(0,e.length-1),t):_s(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ua=function(e){return e.replace(IT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(LT);return Y_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},K_=function(e,t,n,i,s){var o=t-e,a=i-n;return _s(s,function(l){return n+((l-e)/o*a||0)})},QT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=hn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(m){m*=f;var _=Math.min(h,~~m);return u[_](m-_)},n=t}else i||(e=oa(Pn(e)?[]:{},e));if(!u){for(l in t)Sp.call(a,e,l,"get",t[l]);s=function(m){return Ap(m,a)||(o?e.p:e)}}}return _s(n,s)},E_=function(e,t,n){var i=e.labels,s=Pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mi=function(e,t,n){var i=e.vars,s=i[t],o=Ut,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ps.length&&sh(),a&&(Ut=a),u=l?s.apply(c,l):s.call(c),Ut=o,u},Ml=function(e){return gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&mi(e,"onInterrupt"),e},sa,J_=[],$_=function(e){if(e)if(e=!e.name&&e.default||e,hp()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Rl,render:Ap,add:Sp,kill:g1,modifier:m1,rawVars:0},o={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(ca(),e!==i){if(ni[t])return;_i(i,_i(oh(e,s),o)),oa(i.prototype,oa(s,oh(e,o))),ni[i.prop=t]=i,e.targetTest&&(nh.push(i),mp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}N_(t,i),e.register&&e.register(In,i,Hn)}else J_.push(e)},At=255,Sl={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Kd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},j_=function(e,t,n){var i=e?Ur(e)?[e>>16,e>>8&At,e&At]:0:Sl.black,s,o,a,l,c,u,f,h,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sl[e])i=Sl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(M_),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Kd(l+1/3,s,o),i[1]=Kd(l,s,o),i[2]=Kd(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(fp),n&&i.length<4&&(i[3]=1),i}else i=e.match(M_)||Sl.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/At,o=i[1]/At,a=i[2]/At,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Q_=function(e){var t=[],n=[],i=-1;return e.split(Nr).forEach(function(s){var o=s.match($s)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},A_=function(e,t,n){var i="",s=(e+i).match(Nr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=j_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Q_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Nr,"1").split($s),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Nr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),e1=/hsl[a]?\(/,yp=function(e){var t=e.join(" "),n;if(Nr.lastIndex=0,Nr.test(t))return n=e1.test(t),e[1]=A_(e[1],n),e[0]=A_(e[0],n,Q_(e[1])),!0},Cl,ii=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,m=function _(p){var g=r()-i,M=p===!0,A,y,S,E;if((g>e||g<0)&&(n+=g-t),i+=g,S=i-n,A=S-o,(A>0||M)&&(E=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=A+(A>=s?4:s-A),y=1),M||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](S,h,E,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){L_&&(!tp&&hp()&&(hr=tp=window,pp=hr.document||{},gi.gsap=In,(hr.gsapVersions||(hr.gsapVersions=[])).push(In.version),D_(rh||hr.GreenSockGlobals||!hr.gsap&&hr||{}),J_.forEach($_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Cl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Cl=0,c=Rl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,g,M){var A=g?function(y,S,E,T){p(y,S,E,T),f.remove(A)}:p;return f.remove(p),a[M?"unshift":"push"](A),ca(),A},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),ca=function(){return!Cl&&ii.wake()},ht={},t1=/^[\d.\-M][\d.\-,\s]/,n1=/["']/g,i1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(n1,"").trim():+c,i=l.substr(a+1).trim();return t},r1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},s1=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i1(t[1])]:r1(e).split(",").map(F_)):ht._CE&&t1.test(e)?ht._CE("",e):n},o1=function(e){return function(t){return 1-e(1-t)}},Ks=function(e,t){return e&&(Ht(e)?e:ht[e]||s1(e))||t},Qs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Gn(e,function(a){ht[a]=gi[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},e0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jd=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ep*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*PT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:e0(a);return s=ep/s,l.config=function(c,u){return r(e,c,u)},l},$d=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:e0(n);return i.config=function(s){return r(e,s)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Qs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Qs("Elastic",Jd("in"),Jd("out"),Jd());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Qs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Qs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Qs("Circ",function(r){return-(P_(1-r*r)-1)});Qs("Sine",function(r){return r===1?1:-CT(r*AT)+1});Qs("Back",$d("in"),$d("out"),$d());ht.SteppedEase=ht.steps=gi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Rt;return function(a){return((i*Il(0,o,a)|0)+s)*n}}};El.ease=ht["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gp+=r+","+r+"Params,"});var Mp=function(e,t){this.id=RT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xp,this.set=t?t.getSetter:ph},Pl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Cl||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ca(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dh(this,n),!s._dp||s.parent||z_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),O_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+T_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+T_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?aa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ah(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(Il(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),fh(this),zT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ah(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=OT);var i=Mn;return Mn=n,vp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,w_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,w_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ci(this,n),ri(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Rt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ht(n)?n:B_,l=function(){var u=i.then;i.then=null,s&&s(),Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ml(this)},r})();_i(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){C_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Ft&&fr(n.parent||Ft,Dr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&V_(Dr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Tl(0,arguments,this),this},t.from=function(i,s,o){return Tl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Tl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,bl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Ci(this,o),1),this},t.call=function(i,s,o){return fr(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(i,o,Ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,bl(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,bl(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,m,_,p,g,M,A,y,S,E,T;if(this!==Ft&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,A=this._ts,g=!A,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ot(u%p),u===l?(_=this._repeat,h=c):(S=Ot(u/p),_=~~S,_&&_===S&&(h=c,_--),h>c&&(h=c)),S=aa(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),E&&_&1&&(h=c-h,T=1),_!==S&&!this._lock){var x=E&&S&1,b=x===(E&&_&1);if(_<S&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ot(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=WT(this,Ot(a),Ot(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!S&&(mi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!g){M=0,m&&(u+=this._zTime=-Rt);break}}d=m}else{d=this._last;for(var R=i<0?i:h;d;){if(m=d._prev,(d._act||R<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,o||Mn&&vp(d)),h!==this._time||!this._ts&&!g){M=0,m&&(u+=this._zTime=R?-Rt:Rt);break}}d=m}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Rt)._zTime=h>=a?1:-1,this._ts))return this._start=y,fh(this),this.render(i,s,o);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ur(s)||(s=Ci(this,s,i)),!(i instanceof Pl)){if(Pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(hn(i))return this.addLabel(i,s);if(Ht(i))i=Qt.delayedCall(0,i);else return this}return this!==i?fr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return hn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&hh(this,i),i===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||Rl,o);return a.data="isPause",this._hasPause=1,fr(this,a,Ci(this,i))},t.removePause=function(i){var s=this._first;for(i=Ci(this,i);s;)s._start===i&&s.data==="isPause"&&gs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ds!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ii(i),l=this._first,c=Ur(s),u;l;)l instanceof Qt?FT(l._targets,a)&&(c?(!ds||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ci(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=Qt.to(o,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Rt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&la(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,f||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,_i({startAt:{time:Ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),E_(this,Ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),E_(this,Ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ot(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Zs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Pi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ot(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;la(o,o===Ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(O_(Ft,ah(i,Ft)),U_=ii.frame),ii.frame>=S_){S_+=si.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(Pl);_i(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a1=function(e,t,n,i,s,o,a){var l=new Hn(this._pt,e,t,0,1,Ep,null,s),c=0,u=0,f,h,d,m,_,p,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=ua(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(Yd)||[];f=Yd.exec(i);)m=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?js(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=Yd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dp.test(i)||g)&&(l.e=0),this._pt=l,l},Sp=function(e,t,n,i,s,o,a,l,c,u){Ht(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Ht(f)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Ht(f)?c?f1:i0:wp,m;if(hn(i)&&(~i.indexOf("random(")&&(i=ua(i)),i.charAt(1)==="="&&(m=js(h,i)+(Sn(h)||0),(m||m===0)&&(i=m))),!u||h!==i||lp)return!isNaN(h*i)&&i!==""?(m=new Hn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?p1:r0,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(t in e)&&uh(t,i),a1.call(this,e,t,h,i,d,l||si.stringFilter,c))},l1=function(e,t,n,i,s){if(Ht(e)&&(e=wl(e,s,t,n,i)),!dr(e)||e.style&&e.nodeType||Pn(e)||I_(e))return hn(e)?wl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=wl(e[a],s,t,n,i);return o},bp=function(e,t,n,i,s,o){var a,l,c,u;if(ni[e]&&(a=new ni[e]).init(s,a.rawVars?t[e]:l1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==sa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ds,lp,Tp=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,M=g&&g.data==="nested"?g.vars.targets:p,A=e._overwrite==="auto"&&!up,y=e.timeline,S=i.easeReverse||f,E,T,x,b,R,I,P,H,z,U,V,O,Z;if(y&&(!h||!s)&&(s="none"),e._ease=Ks(s,El.ease),e._rEase=S&&(Ks(S)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(H=p[0]?ms(p[0]).harness:0,O=H&&i[H.prop],E=oh(i,mp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?th:UT),_._lazy=0),o){if(gs(e._startAt=Qt.set(p,_i({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!d)&&e._startAt.revert(th),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),x=_i({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:g},E),O&&(x[H.prop]=O),gs(e._startAt=Qt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(th):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ri(l)||l&&!m,T=0;T<p.length;T++){if(R=p[T],P=R._gsap||_p(p)[T]._gsap,e._ptLookup[T]=U={},np[P.id]&&ps.length&&sh(),V=M===p?T:M.indexOf(R),H&&(z=new H).init(R,O||E,e,V,M)!==!1&&(e._pt=b=new Hn(e._pt,R,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ee){U[ee]=b}),z.priority&&(I=1)),!H||O)for(x in E)ni[x]&&(z=bp(x,E,e,V,R,M))?z.priority&&(I=1):U[x]=b=Sp.call(e,R,x,"get",E[x],V,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(R,e._op[T]),A&&e._pt&&(ds=e,Ft.killTweensOf(R,U,e.globalTime(t)),Z=!e.parent,ds=0),e._pt&&l&&(np[P.id]=1)}I&&Rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&y.render(Pi,!0,!0)},c1=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lp=1,e.vars[t]="+=0",Tp(e,a),lp=0,l?Al(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Wt(n)+Sn(f.e)),f.b&&(f.b=u.s+Sn(f.b))},u1=function(e,t){var n=e[0]?ms(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=oa({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},h1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wl=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):hn(e)&&~e.indexOf("random(")?ua(e):e},t0=gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",n0={};Gn(t0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return n0[r]=1});var Qt=(function(r){C_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:bl(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ft,M=(Pn(n)||I_(n)?Ur(n[0]):"length"in i)?[n]:Ii(n),A,y,S,E,T,x,b,R;if(a._targets=M.length?_p(M):Al("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||h||eh(c)||eh(u)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Cn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),A.kill(),A.parent=A._dp=Dr(a),A._start=0,h||eh(c)||eh(u)){if(E=M.length,b=h&&X_(h),dr(h))for(T in h)~t0.indexOf(T)&&(R||(R={}),R[T]=h[T]);for(y=0;y<E;y++)S=oh(i,n0),S.stagger=0,I&&(S.easeReverse=I),R&&oa(S,R),x=M[y],S.duration=+wl(c,Dr(a),y,x,M),S.delay=(+wl(u,Dr(a),y,x,M)||0)-a._delay,!h&&E===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),A.to(x,S,b?b(y,x,M):0),A._ease=ht.none;A.duration()?c=u=0:a.timeline=0}else if(m){bl(_i(A.vars.defaults,{ease:"none"})),A._ease=Ks(m.ease||i.ease||"none");var P=0,H,z,U;if(Pn(m))m.forEach(function(V){return A.to(M,V,">")}),A.duration();else{S={};for(T in m)T==="ease"||T==="easeEach"||h1(T,m[T],S,m.easeEach);for(T in S)for(H=S[T].sort(function(V,O){return V.t-O.t}),P=0,y=0;y<H.length;y++)z=H[y],U={ease:z.e,duration:(z.t-(y?H[y-1].t:0))/100*c},U[T]=z.v,A.to(M,U,P),P+=U.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return d===!0&&!up&&(ds=Dr(a),Ft.killTweensOf(M),ds=0),fr(g,Dr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!m&&a._start===Ot(g._time)&&ri(f)&&VT(Dr(a))&&g.data!=="nested")&&(a._tTime=-Rt,a.render(Math.max(0,-u)||0)),p&&V_(Dr(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Rt&&!u?l:i<Rt?0:i,h,d,m,_,p,g,M,A;if(!c)HT(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ot(f%_),f===l?(m=this._repeat,h=c):(p=Ot(f/_),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(h=c-h),p=aa(this._tTime,_),h===a&&!o&&this._initted&&m===p)return this._tTime=f,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(G_(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var S=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(mi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ip(this,i,s,o),mi(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ip(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gs(this,1),!s&&!(u&&!a)&&(f||a||g)&&(mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Cl||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tp(this,c),u=this._ease(c/this._dur),c1(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(dh(this,0),this.parent||k_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ml(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ds&&ds.vars.overwrite!==!0)._first||Ml(this),this.parent&&o!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ii(i):a,c=this._ptLookup,u=this._pt,f,h,d,m,_,p,g;if((!s||s==="all")&&kT(a,l))return s==="all"&&(this._pt=0),Ml(this);for(f=this._op=this._op||[],s!=="all"&&(hn(s)&&(_={},Gn(s,function(M){return _[M]=1}),s=_),s=u1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,m=h,d={}):(d=f[g]=f[g]||{},m=s);for(_ in m)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&hh(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ml(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Tl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Tl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ft.killTweensOf(i,s,o)},e})(Pl);_i(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Cn,t=sp.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var wp=function(e,t,n){return e[t]=n},i0=function(e,t,n){return e[t](n)},f1=function(e,t,n,i){return e[t](i.fp,n)},d1=function(e,t,n){return e.setAttribute(t,n)},ph=function(e,t){return Ht(e[t])?i0:ch(e[t])&&e.setAttribute?d1:wp},r0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},p1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ep=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ap=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},m1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},g1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Hn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||r0,this.d=l||this,this.set=c||wp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_1,this.m=n,this.mt=s,this.tween=i},r})();Gn(gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return mp[r]=1});gi.TweenMax=gi.TweenLite=Qt;gi.TimelineLite=gi.TimelineMax=Cn;Ft=new Cn({sortChildren:!1,defaults:El,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=yp;var Js=[],ih={},x1=[],R_=0,v1=0,jd=function(e){return(ih[e]||x1).map(function(t){return t()})},cp=function(){var e=Date.now(),t=[];e-R_>2&&(jd("matchMediaInit"),Js.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=hr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),jd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),R_=e,jd("matchMedia"))},s0=(function(){function r(t,n){this.selector=n&&op(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var o=this,a=function(){var c=Ut,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=op(s)),Ut=o,f=i.apply(o,arguments),Ht(f)&&o._r.push(f),Ut=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Js.length;o--;)Js[o].id===this.id&&Js.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),y1=(function(){function r(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){dr(n)||(n={matches:n});var o=new s0(0,s||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=hr.matchMedia(n[c]),l&&(Js.indexOf(o)<0&&Js.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(cp):l.addEventListener("change",cp)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),lh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $_(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){hn(e)&&(e=Ii(e)[0]);var s=ms(e||{}).get,o=n?B_:F_;return n==="native"&&(n=""),e&&(t?o((ni[t]&&ni[t].get||s)(e,t,n,i)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ii(e),e.length>1){var i=e.map(function(u){return In.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=ni[t],a=ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;sa._pt=0,f.init(e,n?u+n:u,sa,0,[e]),f.render(1,f),sa._pt&&Ap(1,sa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=In.to(e,_i((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ks(e.ease,El.ease)),b_(El,e||{})},config:function(e){return b_(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!gi[a]&&Al(t+" effect requires "+a+" plugin.")}),Zd[t]=function(a,l,c){return n(Ii(a),_i(l||{},s),c)},o&&(Cn.prototype[t]=function(a,l,c){return this.add(Zd[t](a,dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Ks(t)},parseEase:function(e,t){return arguments.length?Ks(e,t):ht},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=ri(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&fr(n,i,i._start-i._delay),i=s;return fr(Ft,n,0),n},context:function(e,t){return e?new s0(e,t):Ut},matchMedia:function(e){return new y1(e)},matchMediaRefresh:function(){return Js.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||cp()},addEventListener:function(e,t){var n=ih[e]||(ih[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ih[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$T,wrapYoyo:jT,distribute:X_,random:Y_,snap:q_,normalize:JT,getUnit:Sn,clamp:qT,splitColor:j_,toArray:Ii,selector:op,mapRange:K_,pipe:ZT,unitize:KT,interpolate:QT,shuffle:W_},install:D_,effects:Zd,ticker:ii,updateRoot:Cn.updateRoot,plugins:ni,globalTimeline:Ft,core:{PropTween:Hn,globals:N_,Tween:Qt,Timeline:Cn,Animation:Pl,getCache:ms,_removeLinkedListItem:hh,reverting:function(){return Mn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return up=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return lh[r]=Qt[r]});ii.add(Cn.updateRoot);sa=lh.to({},{duration:0});var M1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},S1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=M1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Qd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(hn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}S1(a,s)}}}},In=lh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qd("roundProps",ap),Qd("modifiers"),Qd("snap",q_))||lh;Qt.version=Cn.version=In.version="3.15.0";L_=1;hp()&&ca();var b1=ht.Power0,T1=ht.Power1,w1=ht.Power2,E1=ht.Power3,A1=ht.Power4,R1=ht.Linear,C1=ht.Quad,P1=ht.Cubic,I1=ht.Quart,L1=ht.Quint,D1=ht.Strong,N1=ht.Elastic,U1=ht.Back,O1=ht.SteppedEase,F1=ht.Bounce,B1=ht.Sine,k1=ht.Expo,z1=ht.Circ;var o0,xs,fa,Np,io,V1,a0,Up,G1=function(){return typeof window<"u"},Fr={},no=180/Math.PI,da=Math.PI/180,ha=Math.atan2,l0=1e8,Op=/([A-Z])/g,H1=/(left|right|width|margin|padding|x)/i,W1=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},q1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Y1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Z1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},g0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},K1=function(e,t,n){return e.style[t]=n},J1=function(e,t,n){return e.style.setProperty(t,n)},$1=function(e,t,n){return e._gsap[t]=n},j1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Q1=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ew=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",oi=Bt+"Origin",tw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Fr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Or(i,a)}):this.tfm[e]=o.x?o[e]:Or(i,e),e===oi&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},x0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Op,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Up(),(!s||!s.isStart)&&!n[Bt]&&(x0(n),i.zOrigin&&n[oi]&&(n[oi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},v0=function(e,t){var n={target:e,props:[],revert:nw,save:tw};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},y0,Ip=function(e,t){var n=xs.createElementNS?xs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xs.createElement(e);return n&&n.style?n:xs.createElement(e)},xi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Op,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,pa(t)||t,1)||""},c0="O,Moz,ms,Ms,Webkit".split(","),pa=function(e,t,n){var i=t||io,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(c0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?c0[o]:"")+e},Lp=function(){G1()&&window.document&&(o0=window,xs=o0.document,fa=xs.documentElement,io=Ip("div")||{style:{}},V1=Ip("div"),Bt=pa(Bt),oi=Bt+"Origin",io.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",y0=!!pa("perspective"),Up=In.core.reverting,Np=1)},u0=function(e){var t=e.ownerSVGElement,n=Ip("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fa.removeChild(n),s},h0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},M0=function(e){var t,n;try{t=e.getBBox()}catch{t=u0(e),n=1}return t&&(t.width||t.height)||n||(t=u0(e)),t&&!t.width&&!t.x&&!t.y?{x:+h0(e,["x","cx","x1"])||0,y:+h0(e,["y","cy","y1"])||0,width:0,height:0}:t},S0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&M0(e))},ys=function(e,t){if(t){var n=e.style,i;t in Fr&&t!==oi&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Op,"-$1").toLowerCase())):n.removeAttribute(t)}},vs=function(e,t,n,i,s,o){var a=new Hn(e._pt,t,n,0,1,o?_0:g0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},f0={deg:1,rad:1,turn:1},iw={grid:1,flex:1},Ms=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=io.style,l=H1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",m,_,p,g;if(i===o||!s||f0[i]||f0[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&S0(e),(d||o==="%")&&(Fr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Wt(d?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xs||!_.appendChild)&&(_=xs.body),p=_._gsap,p&&d&&p.width&&l&&p.time===ii.time&&!p.uncache)return Wt(s/p.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,m=e[u],M?e.style[t]=M:ys(e,t)}else(d||o==="%")&&!iw[xi(_,"display")]&&(a.position=xi(e,"position")),_===e&&(a.position="static"),_.appendChild(io),m=io[u],_.removeChild(io),a.position="absolute";return l&&d&&(p=ms(_),p.time=ii.time,p.width=_[u]),Wt(h?m*s/f:m&&s?f/m*s:0)},Or=function(e,t,n,i){var s;return Np||Lp(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fr[t]&&t!=="transform"?(s=Nl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gh(xi(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=mh[t]&&mh[t](e,t,n)||xi(e,t)||xp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ms(e,t,s,n)+n:s},rw=function(e,t,n,i){if(!n||n==="none"){var s=pa(t,e,1),o=s&&xi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=xi(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,Ep),l=0,c=0,u,f,h,d,m,_,p,g,M,A,y,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=xi(e,t)||i,_?e.style[t]=_:ys(e,t)),u=[n,i],yp(u),n=u[0],i=u[1],h=n.match($s)||[],S=i.match($s)||[],S.length){for(;f=$s.exec(i);)p=f[0],M=i.substring(l,f.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=js(d,p)+y),g=parseFloat(p),A=p.substr((g+"").length),l=$s.lastIndex-A.length,A||(A=A||si.units[t]||y,l===i.length&&(i+=A,a.e+=A)),y!==A&&(d=Ms(e,t,_,A)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?_0:g0;return dp.test(i)&&(a.e=0),this._pt=a,a},d0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=d0[n]||n,t[1]=d0[i]||i,t.join(" ")},ow=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fr[a]&&(l=1,a=a==="transformOrigin"?oi:Bt),ys(n,a);l&&(ys(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Nl(n,1),o.uncache=1,x0(i)))}},mh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Hn(e._pt,t,n,0,0,ow);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Dl=[1,0,0,1,0,0],b0={},T0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},p0=function(e){var t=xi(e,Bt);return T0(t)?Dl:t.substr(7).match(fp).map(Wt)},Fp=function(e,t){var n=e._gsap||ms(e),i=e.style,s=p0(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dl:s):(s===Dl&&!e.offsetParent&&e!==fa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fa.appendChild(e)),s=p0(e),l?i.display=l:ys(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dp=function(e,t,n,i,s,o){var a=e._gsap,l=s||Fp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],M=l[5],A=t.split(" "),y=parseFloat(A[0])||0,S=parseFloat(A[1])||0,E,T,x,b;n?l!==Dl&&(T=d*p-m*_)&&(x=y*(p/T)+S*(-_/T)+(_*M-p*g)/T,b=y*(-m/T)+S*(d/T)-(d*M-m*g)/T,y=x,S=b):(E=M0(e),y=E.x+(~A[0].indexOf("%")?y/100*E.width:y),S=E.y+(~(A[1]||A[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(g=y-c,M=S-u,a.xOffset=f+(g*d+M*_)-g,a.yOffset=h+(g*m+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[oi]="0px 0px",o&&(vs(o,a,"xOrigin",c,y),vs(o,a,"yOrigin",u,S),vs(o,a,"xOffset",f,a.xOffset),vs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Nl=function(e,t){var n=e._gsap||new Mp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=xi(e,oi)||"0",u,f,h,d,m,_,p,g,M,A,y,S,E,T,x,b,R,I,P,H,z,U,V,O,Z,ee,L,le,_e,Ke,Xe,ke;return u=f=h=_=p=g=M=A=y=0,d=m=1,n.svg=!!(e.getCTM&&S0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),T=Fp(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Dp(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,E=n.yOrigin||0,T!==Dl&&(I=T[0],P=T[1],H=T[2],z=T[3],u=U=T[4],f=V=T[5],T.length===6?(d=Math.sqrt(I*I+P*P),m=Math.sqrt(z*z+H*H),_=I||P?ha(P,I)*no:0,M=H||z?ha(H,z)*no+_:0,M&&(m*=Math.abs(Math.cos(M*da))),n.svg&&(u-=S-(S*I+E*H),f-=E-(S*P+E*z))):(ke=T[6],Ke=T[7],L=T[8],le=T[9],_e=T[10],Xe=T[11],u=T[12],f=T[13],h=T[14],x=ha(ke,_e),p=x*no,x&&(b=Math.cos(-x),R=Math.sin(-x),O=U*b+L*R,Z=V*b+le*R,ee=ke*b+_e*R,L=U*-R+L*b,le=V*-R+le*b,_e=ke*-R+_e*b,Xe=Ke*-R+Xe*b,U=O,V=Z,ke=ee),x=ha(-H,_e),g=x*no,x&&(b=Math.cos(-x),R=Math.sin(-x),O=I*b-L*R,Z=P*b-le*R,ee=H*b-_e*R,Xe=z*R+Xe*b,I=O,P=Z,H=ee),x=ha(P,I),_=x*no,x&&(b=Math.cos(x),R=Math.sin(x),O=I*b+P*R,Z=U*b+V*R,P=P*b-I*R,V=V*b-U*R,I=O,U=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Wt(Math.sqrt(I*I+P*P+H*H)),m=Wt(Math.sqrt(V*V+ke*ke)),x=ha(U,V),M=Math.abs(x)>2e-4?x*no:0,y=Xe?1/(Xe<0?-Xe:Xe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!T0(xi(e,Bt)),O&&e.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Wt(d),n.scaleY=Wt(m),n.rotation=Wt(_)+a,n.rotationX=Wt(p)+a,n.rotationY=Wt(g)+a,n.skewX=M+a,n.skewY=A+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[oi]=gh(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?lw:y0?w0:aw,n.uncache=0,n},gh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cp=function(e,t,n){var i=Sn(t);return Wt(parseFloat(t)+parseFloat(Ms(e,"x",n+"px",i)))+i},aw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,w0(e,t)},eo="0deg",Ll="0px",to=") ",w0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,M=n.target,A=n.zOrigin,y="",S=g==="auto"&&e&&e!==1||g===!0;if(A&&(f!==eo||u!==eo)){var E=parseFloat(u)*da,T=Math.sin(E),x=Math.cos(E),b;E=parseFloat(f)*da,b=Math.cos(E),o=Cp(M,o,T*b*-A),a=Cp(M,a,-Math.sin(E)*-A),l=Cp(M,l,x*b*-A+A)}p!==Ll&&(y+="perspective("+p+to),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==Ll||a!==Ll||l!==Ll)&&(y+=l!==Ll||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+to),c!==eo&&(y+="rotate("+c+to),u!==eo&&(y+="rotateY("+u+to),f!==eo&&(y+="rotateX("+f+to),(h!==eo||d!==eo)&&(y+="skew("+h+", "+d+to),(m!==1||_!==1)&&(y+="scale("+m+", "+_+to),M.style[Bt]=y||"translate(0, 0)"},lw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,M=n.forceCSS,A=parseFloat(o),y=parseFloat(a),S,E,T,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=da,c*=da,S=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=da,b=Math.tan(c-u),b=Math.sqrt(1+b*b),T*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),S*=b,E*=b)),S=Wt(S),E=Wt(E),T=Wt(T),x=Wt(x)):(S=f,x=h,E=T=0),(A&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(A=Ms(d,"x",o,"px"),y=Ms(d,"y",a,"px")),(m||_||p||g)&&(A=Wt(A+m-(m*S+_*T)+p),y=Wt(y+_-(m*E+_*x)+g)),(i||s)&&(b=d.getBBox(),A=Wt(A+i/100*b.width),y=Wt(y+s/100*b.height)),b="matrix("+S+","+E+","+T+","+x+","+A+","+y+")",d.setAttribute("transform",b),M&&(d.style[Bt]=b)},cw=function(e,t,n,i,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*l0)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*l0)%o-~~(c/o)*o)),e._pt=h=new Hn(e._pt,t,n,i,c,X1),h.e=u,h.u="deg",e._props.push(n),h},m0=function(e,t){for(var n in t)e[n]=t[n];return e},uw=function(e,t,n){var i=m0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=Nl(n,1),ys(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=Nl(n,1),o[Bt]=c);for(l in Fr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Sn(c),m=Sn(u),f=d!==m?Ms(n,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new Hn(e._pt,a,l,f,h-f,Pp),e._pt.u=m||0,e._props.push(l));m0(a,i)};Gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});mh[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(m){return Or(a,m,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Bp={name:"css",register:Lp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,m,_,p,g,M,A,y,S,E,T,x,b;Np||Lp(),this.styles=this.styles||v0(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ni[_]&&bp(_,t,n,i,e,s)))){if(d=typeof u,m=mh[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ua(u)),m)m(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Nr.lastIndex=0,Nr.test(c)||(p=Sn(c),g=Sn(u),g?p!==g&&(c=Ms(e,_,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],hn(c)&&~c.indexOf("random(")&&(c=ua(c)),Sn(c+"")||c==="auto"||(c+=si.units[_]||Sn(Or(e,_))||""),(c+"").charAt(1)==="="&&(c=Or(e,_))):c=Or(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(h===1&&Or(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),vs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Fr,A){if(this.styles.save(_),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=xi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=xi(e,"perspective"),R?e.style.perspective=R:ys(e,"perspective")}f=parseFloat(u)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Nl(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Hn(this._pt,a,Bt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Hn(this._pt,S,"scaleY",S.scaleY,(M?js(S.scaleY,M+f):f)-S.scaleY||0,Pp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(oi,0,a[oi]),u=sw(u),S.svg?Dp(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&vs(this,S,"zOrigin",S.zOrigin,g),vs(this,a,_,gh(c),gh(u)));continue}else if(_==="svgOrigin"){Dp(e,u,1,E,0,this);continue}else if(_ in b0){cw(this,S,_,h,M?js(h,M+u):u);continue}else if(_==="smoothOrigin"){vs(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){uw(this,u,e);continue}}else _ in a||(_=pa(_)||_);if(A||(f||f===0)&&(h||h===0)&&!W1.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),g=Sn(u)||(_ in si.units?si.units[_]:p),p!==g&&(h=Ms(e,_,c,g)),this._pt=new Hn(this._pt,A?S:a,_,h,(M?js(h,M+f):f)-h,!A&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Z1:Pp),this._pt.u=g||0,A&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=Y1):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=q1);else if(_ in a)rw.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){uh(_,u);continue}A||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}T&&Rp(this)},render:function(e,t){if(t.tween._time||!Up())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Or,aliases:pr,getSetter:function(e,t,n){var i=pr[t];return i&&i.indexOf(",")<0&&(t=i),t in Fr&&t!==oi&&(e._gsap.x||Or(e,"x"))?n&&a0===n?t==="scale"?j1:$1:(a0=n||{})&&(t==="scale"?Q1:ew):e.style&&!ch(e.style[t])?K1:~t.indexOf("-")?J1:ph(e,t)},core:{_removeProperty:ys,_getMatrix:Fp}};In.utils.checkPrefix=pa;In.core.getStyleSaver=v0;(function(r,e,t,n){var i=Gn(r+","+e+","+t,function(s){Fr[s]=1});Gn(e,function(s){si.units[s]="deg",b0[s]=1}),pr[i[13]]=r+","+e,Gn(n,function(s){var o=s.split(":");pr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});In.registerPlugin(Bp);var _h=In.registerPlugin(Bp)||In,oC=_h.core.Tween;function E0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hw(r,e,t){return e&&E0(r.prototype,e),t&&E0(r,t),r}var bn,yh,fw,vi,Ss,bs,ga,R0,ro,_a,C0,Br,qi,P0,I0=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},L0=1,ma=[],nt=[],Yi=[],Ol=Date.now,kp=function(e,t){return t},dw=function(){var e=_a.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Yi),nt=n,Yi=i,kp=function(o,a){return t[o](a)}},zr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},Fl=function(e){return!!~C0.indexOf(e)},Xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xh="scrollLeft",vh="scrollTop",zp=function(){return Br&&Br.isPressed||nt.cache++},Mh=function(e,t){var n=function i(s){if(s||s===0){L0&&(vi.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=i.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),i.cacheID=nt.cache,o&&kp("ss",s)}else(t||nt.cache!==i.cacheID||kp("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Ln={s:xh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mh(function(r){return arguments.length?vi.scrollTo(r,sn.sc()):vi.pageXOffset||Ss[xh]||bs[xh]||ga[xh]||0})},sn={s:vh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:Mh(function(r){return arguments.length?vi.scrollTo(Ln.sc(),r):vi.pageYOffset||Ss[vh]||bs[vh]||ga[vh]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||bn.utils.toArray)(e)[0]||(typeof e=="string"&&bn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},kr=function(e,t){var n=t.s,i=t.sc;Fl(e)&&(e=Ss.scrollingElement||bs);var s=nt.indexOf(e),o=i===sn.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Xn(e,"scroll",zp);var a=nt[s+o],l=a||(nt[s+o]=Mh(zr(e,n),!0)||(Fl(e)?i:Mh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=bn.getProperty(e,"scrollBehavior")==="smooth"),l},Sh=function(e,t,n){var i=e,s=e,o=Ol(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=Ol();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(m){var _=a,p=s,g=Ol();return(m||m===0)&&m!==i&&u(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ul=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},A0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},D0=function(){_a=bn.core.globals().ScrollTrigger,_a&&_a.core&&dw()},N0=function(e){return bn=e||I0(),!yh&&bn&&typeof document<"u"&&document.body&&(vi=window,Ss=document,bs=Ss.documentElement,ga=Ss.body,C0=[vi,Ss,bs,ga],fw=bn.utils.clamp,P0=bn.core.context||function(){},ro="onpointerenter"in ga?"pointer":"mouse",R0=Xt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Xt.eventTypes=("ontouchstart"in bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return L0=0},500),yh=1),_a||D0(),yh};Ln.op=sn;nt.cache=0;var Xt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){yh||N0(bn)||console.warn("Please gsap.registerPlugin(Observer)"),_a||D0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,M=n.onDrag,A=n.onPress,y=n.onRelease,S=n.onRight,E=n.onLeft,T=n.onUp,x=n.onDown,b=n.onChangeX,R=n.onChangeY,I=n.onChange,P=n.onToggleX,H=n.onToggleY,z=n.onHover,U=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,ee=n.onGestureStart,L=n.onGestureEnd,le=n.onWheel,_e=n.onEnable,Ke=n.onDisable,Xe=n.onClick,ke=n.scrollSpeed,J=n.capture,oe=n.allowClicks,ie=n.lockAxis,Ae=n.onLockAxis;this.target=a=qn(a)||bs,this.vars=n,d&&(d=bn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,ke=ke||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(ga).lineHeight)||22);var Fe,Te,lt,Se,ze,We,He,q=this,ft=0,Mt=0,Ct=n.passive||!u&&n.passive!==!1,qe=kr(a,Ln),pt=kr(a,sn),N=qe(),kt=pt(),Ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",C=Fl(a),v=a.ownerDocument||Ss,B=[0,0,0],W=[0,0,0],K=0,ue=function(){return K=Ol()},ae=function(ne,Ue){return(q.event=ne)&&d&&pw(ne.target,d)||Ue&&Ge&&ne.pointerType!=="touch"||O&&O(ne,Ue)},$=function(){q._vx.reset(),q._vy.reset(),Te.pause(),f&&f(q)},j=function(){var ne=q.deltaX=A0(B),Ue=q.deltaY=A0(W),se=Math.abs(ne)>=i,Oe=Math.abs(Ue)>=i;I&&(se||Oe)&&I(q,ne,Ue,B,W),se&&(S&&q.deltaX>0&&S(q),E&&q.deltaX<0&&E(q),b&&b(q),P&&q.deltaX<0!=ft<0&&P(q),ft=q.deltaX,B[0]=B[1]=B[2]=0),Oe&&(x&&q.deltaY>0&&x(q),T&&q.deltaY<0&&T(q),R&&R(q),H&&q.deltaY<0!=Mt<0&&H(q),Mt=q.deltaY,W[0]=W[1]=W[2]=0),(Se||lt)&&(V&&V(q),lt&&(p&&lt===1&&p(q),M&&M(q),lt=0),Se=!1),We&&!(We=!1)&&Ae&&Ae(q),ze&&(le(q),ze=!1),Fe=0},de=function(ne,Ue,se){B[se]+=ne,W[se]+=Ue,q._vx.update(ne),q._vy.update(Ue),c?Fe||(Fe=requestAnimationFrame(j)):j()},Ee=function(ne,Ue){ie&&!He&&(q.axis=He=Math.abs(ne)>Math.abs(Ue)?"x":"y",We=!0),He!=="y"&&(B[2]+=ne,q._vx.update(ne,!0)),He!=="x"&&(W[2]+=Ue,q._vy.update(Ue,!0)),c?Fe||(Fe=requestAnimationFrame(j)):j()},pe=function(ne){if(!ae(ne,1)){ne=Ul(ne,u);var Ue=ne.clientX,se=ne.clientY,Oe=Ue-q.x,Re=se-q.y,Ye=q.isDragging;q.x=Ue,q.y=se,(Ye||(Oe||Re)&&(Math.abs(q.startX-Ue)>=s||Math.abs(q.startY-se)>=s))&&(lt||(lt=Ye?2:1),Ye||(q.isDragging=!0),Ee(Oe,Re))}},fe=q.onPress=function(re){ae(re,1)||re&&re.button||(q.axis=He=null,Te.pause(),q.isPressed=!0,re=Ul(re),ft=Mt=0,q.startX=q.x=re.clientX,q.startY=q.y=re.clientY,q._vx.reset(),q._vy.reset(),Xn(Z?a:v,qi[1],pe,Ct,!0),q.deltaX=q.deltaY=0,A&&A(q))},ce=q.onRelease=function(re){if(!ae(re,1)){Wn(Z?a:v,qi[1],pe,!0);var ne=!isNaN(q.y-q.startY),Ue=q.isDragging,se=Ue&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Oe=Ul(re);!se&&ne&&(q._vx.reset(),q._vy.reset(),u&&oe&&bn.delayedCall(.08,function(){if(Ol()-K>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(v.createEvent){var Re=v.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,vi,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Re)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,f&&Ue&&!Z&&Te.restart(!0),lt&&j(),g&&Ue&&g(q),y&&y(q,se)}},Ie=function(ne){return ne.touches&&ne.touches.length>1&&(q.isGesturing=!0)&&ee(ne,q.isDragging)},Ne=function(){return(q.isGesturing=!1)||L(q)},D=function(ne){if(!ae(ne)){var Ue=qe(),se=pt();de((Ue-N)*ke,(se-kt)*ke,1),N=Ue,kt=se,f&&Te.restart(!0)}},he=function(ne){if(!ae(ne)){ne=Ul(ne,u),le&&(ze=!0);var Ue=(ne.deltaMode===1?l:ne.deltaMode===2?vi.innerHeight:1)*m;de(ne.deltaX*Ue,ne.deltaY*Ue,0),f&&!Z&&Te.restart(!0)}},Q=function(ne){if(!ae(ne)){var Ue=ne.clientX,se=ne.clientY,Oe=Ue-q.x,Re=se-q.y;q.x=Ue,q.y=se,Se=!0,f&&Te.restart(!0),(Oe||Re)&&Ee(Oe,Re)}},me=function(ne){q.event=ne,z(q)},ge=function(ne){q.event=ne,U(q)},te=function(ne){return ae(ne)||Ul(ne,u)&&Xe(q)};Te=q._dc=bn.delayedCall(h||.25,$).pause(),q.deltaX=q.deltaY=0,q._vx=Sh(0,50,!0),q._vy=Sh(0,50,!0),q.scrollX=qe,q.scrollY=pt,q.isDragging=q.isGesturing=q.isPressed=!1,P0(this),q.enable=function(re){return q.isEnabled||(Xn(C?v:a,"scroll",zp),o.indexOf("scroll")>=0&&Xn(C?v:a,"scroll",D,Ct,J),o.indexOf("wheel")>=0&&Xn(a,"wheel",he,Ct,J),(o.indexOf("touch")>=0&&R0||o.indexOf("pointer")>=0)&&(Xn(a,qi[0],fe,Ct,J),Xn(v,qi[2],ce),Xn(v,qi[3],ce),oe&&Xn(a,"click",ue,!0,!0),Xe&&Xn(a,"click",te),ee&&Xn(v,"gesturestart",Ie),L&&Xn(v,"gestureend",Ne),z&&Xn(a,ro+"enter",me),U&&Xn(a,ro+"leave",ge),V&&Xn(a,ro+"move",Q)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=Se=lt=!1,q._vx.reset(),q._vy.reset(),N=qe(),kt=pt(),re&&re.type&&fe(re),_e&&_e(q)),q},q.disable=function(){q.isEnabled&&(ma.filter(function(re){return re!==q&&Fl(re.target)}).length||Wn(C?v:a,"scroll",zp),q.isPressed&&(q._vx.reset(),q._vy.reset(),Wn(Z?a:v,qi[1],pe,!0)),Wn(C?v:a,"scroll",D,J),Wn(a,"wheel",he,J),Wn(a,qi[0],fe,J),Wn(v,qi[2],ce),Wn(v,qi[3],ce),Wn(a,"click",ue,!0),Wn(a,"click",te),Wn(v,"gesturestart",Ie),Wn(v,"gestureend",Ne),Wn(a,ro+"enter",me),Wn(a,ro+"leave",ge),Wn(a,ro+"move",Q),q.isEnabled=q.isPressed=q.isDragging=!1,Ke&&Ke(q))},q.kill=q.revert=function(){q.disable();var re=ma.indexOf(q);re>=0&&ma.splice(re,1),Br===q&&(Br=0)},ma.push(q),Z&&Fl(a)&&(Br=q),q.enable(_)},hw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xt.version="3.15.0";Xt.create=function(r){return new Xt(r)};Xt.register=N0;Xt.getAll=function(){return ma.slice()};Xt.getById=function(r){return ma.filter(function(e){return e.vars.id===r})[0]};I0()&&bn.registerPlugin(Xt);var we,Ma,at,yt,Si,_t,em,Bh,$l,Wl,kl,bh,Dn,Vh,Yp,Zn,U0,O0,Sa,j0,Vp,Q0,Yn,Zp,ex,tx,Ts,Kp,tm,ba,nm,Xl,Jp,Gp,Th=1,Nn=Date.now,Hp=Nn(),Ni=0,zl=0,F0=function(e,t,n){var i=Mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},B0=function(e,t){return t&&(!Mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},mw=function r(){return zl&&requestAnimationFrame(r)},k0=function(){return Vh=1},z0=function(){return Vh=0},mr=function(e){return e},Vl=function(e){return Math.round(e*1e5)/1e5||0},nx=function(){return typeof window<"u"},ix=function(){return we||nx()&&(we=window.gsap)&&we.registerPlugin&&we},uo=function(e){return!!~em.indexOf(e)},rx=function(e){return(e==="Height"?nm:at["inner"+e])||Si["client"+e]||_t["client"+e]},sx=function(e){return zr(e,"getBoundingClientRect")||(uo(e)?function(){return Fh.width=at.innerWidth,Fh.height=nm,Fh}:function(){return Vr(e)})},gw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=zr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?rx(s):e["client"+s])||0}},_w=function(e,t){return!t||~Yi.indexOf(e)?sx(e):function(){return Fh}},gr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=zr(e,n))?o()-sx(e)()[s]:uo(e)?(Si[n]||_t[n])-rx(i):e[n]-e["offset"+i])},wh=function(e,t){for(var n=0;n<Sa.length;n+=3)(!t||~t.indexOf(Sa[n+1]))&&e(Sa[n],Sa[n+1],Sa[n+2])},Mi=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Gl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},Bl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},xa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},va=Math.abs,ox="left",ax="top",im="right",rm="bottom",ao="width",lo="height",ql="Right",Yl="Left",Zl="Top",Kl="Bottom",on="padding",Li="margin",wa="Width",sm="Height",fn="px",Di=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xw=function(e){var t=Di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},V0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vr=function(e,t){var n=t&&Di(e)[Yp]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},kh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},lx=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},vw=function(e){return function(t){return we.utils.snap(lx(e),t)}},om=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},yw=function(e){return function(t,n){return om(lx(e))(t,n.direction)}},Eh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ah=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},G0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rh={toggleActions:"play",anticipatePin:0},zh={top:0,left:0,center:.5,bottom:1,right:1},Dh=function(e,t){if(Mi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in zh?zh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ch=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,m=yt.createElement("div"),_=uo(n)||zr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,A=M?c:u,y="border-color:"+A+";font-size:"+f+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===sn?im:rm)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=M,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Nh(m,0,i,M),m},Nh=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+wa]=1,s["border"+a+wa]=0,s[n.p]=t+"px",we.set(e,s)},it=[],$p={},jl,H0=function(){return Nn()-Ni>34&&(jl||(jl=requestAnimationFrame(Gr)))},ya=function(){(!Yn||!Yn.isPressed||Yn.startX>_t.clientWidth)&&(nt.cache++,Yn?jl||(jl=requestAnimationFrame(Gr)):Gr(),Ni||fo("scrollStart"),Ni=Nn())},Wp=function(){tx=at.innerWidth,ex=at.innerHeight},Hl=function(e){nt.cache++,(e===!0||!Dn&&!Q0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Zp||tx!==at.innerWidth||Math.abs(at.innerHeight-ex)>at.innerHeight*.25))&&Bh.restart(!0)},ho={},Mw=[],cx=function r(){return xn(rt,"scrollEnd",r)||oo(!0)},fo=function(e){return ho[e]&&ho[e].map(function(t){return t()})||Mw},yi=[],ux=function(e){for(var t=0;t<yi.length;t+=5)(!e||yi[t+4]&&yi[t+4].query===e)&&(yi[t].style.cssText=yi[t+1],yi[t].getBBox&&yi[t].setAttribute("transform",yi[t+2]||""),yi[t+3].uncache=1)},hx=function(){return nt.forEach(function(e){return Un(e)&&++e.cacheID&&(e.rec=e())})},am=function(e,t){var n;for(Zn=0;Zn<it.length;Zn++)n=it[Zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xl=!0,t&&ux(t),t||fo("revert")},fx=function(e,t){nt.cache++,(t||!Kn)&&nt.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),Mi(e)&&(at.history.scrollRestoration=tm=e)},Kn,co=0,W0,Sw=function(){if(W0!==co){var e=W0=co;requestAnimationFrame(function(){return e===co&&oo(!0)})}},dx=function(){_t.appendChild(ba),nm=!Yn&&ba.offsetHeight||at.innerHeight,_t.removeChild(ba)},X0=function(e){return $l(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},oo=function(e,t){if(Si=yt.documentElement,_t=yt.body,em=[at,yt,Si,_t],Ni&&!e&&!Xl){vn(rt,"scrollEnd",cx);return}dx(),Kn=rt.isRefreshing=!0,Xl||hx();var n=fo("refreshInit");j0&&rt.sort(),t||am(),nt.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Xl=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Jp=1,X0(!0),it.forEach(function(i){var s=gr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),X0(!1),Jp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),fx(tm,1),Bh.pause(),co++,Kn=2,Gr(2),it.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=rt.isRefreshing=!1,fo("refresh")},jp=0,Uh=1,Jl,Gr=function(e){if(e===2||!Kn&&!Xl){rt.isUpdating=!0,Jl&&Jl.update(0);var t=it.length,n=Nn(),i=n-Hp>=50,s=t&&it[0].scroll();if(Uh=jp>s?-1:1,Kn||(jp=s),i&&(Ni&&!Vh&&n-Ni>200&&(Ni=0,fo("scrollEnd")),kl=Hp,Hp=n),Uh<0){for(Zn=t;Zn-- >0;)it[Zn]&&it[Zn].update(0,i);Uh=1}else for(Zn=0;Zn<t;Zn++)it[Zn]&&it[Zn].update(0,i);rt.isUpdating=!1}jl=0},Qp=[ox,ax,rm,im,Li+Kl,Li+ql,Li+Zl,Li+Yl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Oh=Qp.concat([ao,lo,"boxSizing","max"+wa,"max"+sm,"position",Li,on,on+Zl,on+ql,on+Kl,on+Yl]),bw=function(e,t,n){Ta(n);var i=e._gsap;if(i.spacerIsNative)Ta(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Xp=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Qp.length,o=t.style,a=e.style,l;s--;)l=Qp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rm]=a[im]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ao]=kh(e,Ln)+fn,o[lo]=kh(e,sn)+fn,o[on]=a[Li]=a[ax]=a[ox]="0",Ta(i),a[ao]=a["max"+wa]=n[ao],a[lo]=a["max"+sm]=n[lo],a[on]=n[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Tw=/([A-Z])/g,Ta=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Tw,"-$1").toLowerCase())}},Ph=function(e){for(var t=Oh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Oh[s],n[Oh[s]]);return i.t=e,i},ww=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Fh={left:0,top:0},q0=function(e,t,n,i,s,o,a,l,c,u,f,h,d,m){Un(e)&&(e=e(l)),Mi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Dh("0"+e.substr(3),n):0));var _=d?d.time():0,p,g,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Gl(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Nh(a,n,i,!0);else{Un(t)&&(t=t(l));var A=(e||"0").split(" "),y,S,E,T;M=qn(t,l)||_t,y=Vr(M)||{},(!y||!y.left&&!y.top)&&Di(M).display==="none"&&(T=M.style.display,M.style.display="block",y=Vr(M),T?M.style.display=T:M.style.removeProperty("display")),S=Dh(A[0],y[i.d]),E=Dh(A[1]||"0",n),e=y[i.p]-c[i.p]-u+S+s-E,a&&Nh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var x=e+n,b=o._isStart;p="scroll"+i.d2,Nh(o,x,i,b&&x>20||!b&&(f?Math.max(_t[p],Si[p]):o.parentNode[p])<=x+1),f&&(c=Vr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+fn))}return d&&M&&(p=Vr(M),d.seek(h),g=Vr(M),d._caScrollDist=p[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Ew=/(webkit|moz|length|cssText|inset)/i,Y0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Di(e);for(o in a)!+o&&!Ew.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},px=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ih=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},Z0=function(e,t){var n=kr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,m={};c=c||n();var _=px(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Gr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=we.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),rt.isTouch&&vn(e,"touchmove",n.wheelHandler),s},rt=(function(){function r(t,n){Ma||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Kp(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zl){this.update=this.refresh=this.kill=mr;return}n=V0(Mi(n)||Gl(n)||n.nodeType?{trigger:n}:n,Rh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,A=s.once,y=s.snap,S=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:sn,I=!f&&f!==0,P=qn(n.scroller||at),H=we.core.getCache(P),z=uo(P),U=("pinType"in n?n.pinType:zr(P,"pinType")||z&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=I&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Rh.markers,ee=z?0:parseFloat(Di(P)["border"+R.p2+wa])||0,L=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(L)},_e=gw(P,z,R),Ke=_w(P,z),Xe=0,ke=0,J=0,oe=kr(P,R),ie,Ae,Fe,Te,lt,Se,ze,We,He,q,ft,Mt,Ct,qe,pt,N,kt,Ge,C,v,B,W,K,ue,ae,$,j,de,Ee,pe,fe,ce,Ie,Ne,D,he,Q,me,ge;if(L._startClamp=L._endClamp=!1,L._dir=R,p*=45,L.scroller=P,L.scroll=T?T.time.bind(T):oe,Te=oe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(j0=1,n.refreshPriority===-9999&&(Jl=L)),H.tweenScroll=H.tweenScroll||{top:Z0(P,sn),left:Z0(P,Ln)},L.tweenTo=ie=H.tweenScroll[R.p],L.scrubDuration=function(se){Ie=Gl(se)&&se,Ie?ce?ce.duration(se):ce=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return g&&g(L)}}):(ce&&ce.progress(1).kill(),ce=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),pe=0,l||(l=i.vars.id)),y&&((!so(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&we.set(z?[_t,Si]:P,{scrollBehavior:"auto"}),nt.forEach(function(se){return Un(se)&&se.target===(z?yt.scrollingElement||Si:P)&&(se.smooth=!1)}),Fe=Un(y.snapTo)?y.snapTo:y.snapTo==="labels"?vw(i):y.snapTo==="labelsDirectional"?yw(i):y.directional!==!1?function(se,Oe){return om(y.snapTo)(se,Nn()-ke<500?0:Oe.direction)}:we.utils.snap(y.snapTo),Ne=y.duration||{min:.1,max:2},Ne=so(Ne)?Wl(Ne.min,Ne.max):Wl(Ne,Ne),D=we.delayedCall(y.delay||Ie/2||.1,function(){var se=oe(),Oe=Nn()-ke<500,Re=ie.tween;if((Oe||Math.abs(L.getVelocity())<10)&&!Re&&!Vh&&Xe!==se){var Ye=(se-Se)/qe,en=i&&!I?i.totalProgress():Ye,st=Oe?0:(en-fe)/(Nn()-kl)*1e3||0,Lt=we.utils.clamp(-Ye,1-Ye,va(st/2)*st/.185),dn=Ye+(y.inertia===!1?0:Lt),Dt,bt,ut=y,On=ut.onStart,Pt=ut.onInterrupt,Tn=ut.onComplete;if(Dt=Fe(dn,L),Gl(Dt)||(Dt=dn),bt=Math.max(0,Math.round(Se+Dt*qe)),se<=ze&&se>=Se&&bt!==se){if(Re&&!Re._initted&&Re.data<=va(bt-se))return;y.inertia===!1&&(Lt=Dt-Ye),ie(bt,{duration:Ne(va(Math.max(va(dn-en),va(Dt-en))*.185/st/.05||0)),ease:y.ease||"power3",data:va(bt-se),onInterrupt:function(){return D.restart(!0)&&Pt&&xa(L,Pt)},onComplete:function(){L.update(),Xe=oe(),i&&!I&&(ce?ce.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),pe=fe=i&&!I?i.totalProgress():L.progress,M&&M(L),Tn&&xa(L,Tn)}},se,Lt*qe,bt-se-Lt*qe),On&&xa(L,On,ie.tween)}}else L.isActive&&Xe!==se&&D.restart(!0)}).pause()),l&&($p[l]=L),h=L.trigger=qn(h||d!==!0&&d),ge=h&&h._gsap&&h._gsap.stRevert,ge&&(ge=ge(L)),d=d===!0?h:qn(d),Mi(a)&&(a={targets:h,className:a}),d&&(m===!1||m===Li||(m=!m&&d.parentNode&&d.parentNode.style&&Di(d.parentNode).display==="flex"?!1:on),L.pin=d,Ae=we.core.getCache(d),Ae.spacer?pt=Ae.pinState:(E&&(E=qn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ae.spacerIsNative=!!E,E&&(Ae.spacerState=Ph(E))),Ae.spacer=Ge=E||yt.createElement("div"),Ge.classList.add("pin-spacer"),l&&Ge.classList.add("pin-spacer-"+l),Ae.pinState=pt=Ph(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),L.spacer=Ge=Ae.spacer,Ee=Di(d),ue=Ee[m+R.os2],v=we.getProperty(d),B=we.quickSetter(d,R.a,fn),Xp(d,Ge,Ee),kt=Ph(d)),Z){Mt=so(Z)?V0(Z,G0):G0,q=Ch("scroller-start",l,P,R,Mt,0),ft=Ch("scroller-end",l,P,R,Mt,0,q),C=q["offset"+R.op.d2];var te=qn(zr(P,"content")||P);We=this.markerStart=Ch("start",l,te,R,Mt,C,0,T),He=this.markerEnd=Ch("end",l,te,R,Mt,C,0,T),T&&(me=we.quickSetter([We,He],R.a,fn)),!U&&!(Yi.length&&zr(P,"fixedMarkers")===!0)&&(xw(z?_t:P),we.set([q,ft],{force3D:!0}),$=we.quickSetter(q,R.a,fn),de=we.quickSetter(ft,R.a,fn))}if(T){var re=T.vars.onUpdate,ne=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),re&&re.apply(T,ne||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(se,Oe){if(!Oe)return L.kill(!0);var Re=se!==!1||!L.enabled,Ye=Dn;Re!==L.isReverted&&(Re&&(he=Math.max(oe(),L.scroll.rec||0),J=L.progress,Q=i&&i.progress()),We&&[We,He,q,ft].forEach(function(en){return en.style.display=Re?"none":"block"}),Re&&(Dn=L,L.update(Re)),d&&(!S||!L.isActive)&&(Re?bw(d,Ge,pt):Xp(d,Ge,Di(d),ae)),Re||L.update(Re),Dn=Ye,L.isReverted=Re)},L.refresh=function(se,Oe,Re,Ye){if(!((Dn||!L.enabled)&&!Oe)){if(d&&se&&Ni){vn(r,"scrollEnd",cx);return}!Kn&&le&&le(L),Dn=L,ie.tween&&!Re&&(ie.tween.kill(),ie.tween=0),ce&&ce.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var en=_e(),st=Ke(),Lt=T?T.duration():gr(P,R),dn=qe<=.01||!qe,Dt=0,bt=Ye||0,ut=so(Re)?Re.end:n.end,On=n.endTrigger||h,Pt=so(Re)?Re.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Tn=L.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,L),Fn=h&&Math.max(0,it.indexOf(L))||0,tn=Fn,zt,an,Ki,po,pn,qt,bi,w,F,Y,G,X,xe;for(Z&&so(Re)&&(X=we.getProperty(q,R.p),xe=we.getProperty(ft,R.p));tn-- >0;)qt=it[tn],qt.end||qt.refresh(0,1)||(Dn=L),bi=qt.pin,bi&&(bi===h||bi===d||bi===Tn)&&!qt.isReverted&&(Y||(Y=[]),Y.unshift(qt),qt.revert(!0,!0)),qt!==it[tn]&&(Fn--,tn--);for(Un(Pt)&&(Pt=Pt(L)),Pt=F0(Pt,"start",L),Se=q0(Pt,h,en,R,oe(),We,q,L,st,ee,U,Lt,T,L._startClamp&&"_startClamp")||(d?-.001:0),Un(ut)&&(ut=ut(L)),Mi(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Mi(Pt)?Pt.split(" ")[0]:"")+ut:(Dt=Dh(ut.substr(2),en),ut=Mi(Pt)?Pt:(T?we.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Se):Se)+Dt,On=h)),ut=F0(ut,"end",L),ze=Math.max(Se,q0(ut||(On?"100% 0":Lt),On,en,R,oe()+Dt,He,ft,L,st,ee,U,Lt,T,L._endClamp&&"_endClamp"))||-.001,Dt=0,tn=Fn;tn--;)qt=it[tn]||{},bi=qt.pin,bi&&qt.start-qt._pinPush<=Se&&!T&&qt.end>0&&(zt=qt.end-(L._startClamp?Math.max(0,qt.start):qt.start),(bi===h&&qt.start-qt._pinPush<Se||bi===Tn)&&isNaN(Pt)&&(Dt+=zt*(1-qt.progress)),bi===d&&(bt+=zt));if(Se+=Dt,ze+=Dt,L._startClamp&&(L._startClamp+=Dt),L._endClamp&&!Kn&&(L._endClamp=ze||-.001,ze=Math.min(ze,gr(P,R))),qe=ze-Se||(Se-=.01)&&.001,dn&&(J=we.utils.clamp(0,1,we.utils.normalize(Se,ze,he))),L._pinPush=bt,We&&Dt&&(zt={},zt[R.a]="+="+Dt,Tn&&(zt[R.p]="-="+oe()),we.set([We,He],zt)),d&&!(Jp&&L.end>=gr(P,R)))zt=Di(d),po=R===sn,Ki=oe(),W=parseFloat(v(R.a))+bt,!Lt&&ze>1&&(G=(z?yt.scrollingElement||Si:P).style,G={style:G,value:G["overflow"+R.a.toUpperCase()]},z&&Di(_t)["overflow"+R.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+R.a.toUpperCase()]="scroll")),Xp(d,Ge,zt),kt=Ph(d),an=Vr(d,!0),w=U&&kr(P,po?Ln:sn)(),m?(ae=[m+R.os2,qe+bt+fn],ae.t=Ge,tn=m===on?kh(d,R)+qe+bt:0,tn&&(ae.push(R.d,tn+fn),Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=tn+fn)),Ta(ae),Tn&&it.forEach(function(ve){ve.pin===Tn&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),U&&oe(he)):(tn=kh(d,R),tn&&Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=tn+fn)),U&&(pn={top:an.top+(po?Ki-Se:w)+fn,left:an.left+(po?w:Ki-Se)+fn,boxSizing:"border-box",position:"fixed"},pn[ao]=pn["max"+wa]=Math.ceil(an.width)+fn,pn[lo]=pn["max"+sm]=Math.ceil(an.height)+fn,pn[Li]=pn[Li+Zl]=pn[Li+ql]=pn[Li+Kl]=pn[Li+Yl]="0",pn[on]=zt[on],pn[on+Zl]=zt[on+Zl],pn[on+ql]=zt[on+ql],pn[on+Kl]=zt[on+Kl],pn[on+Yl]=zt[on+Yl],N=ww(pt,pn,S),Kn&&oe(0)),i?(F=i._initted,Vp(1),i.render(i.duration(),!0,!0),K=v(R.a)-W+qe+bt,j=Math.abs(qe-K)>1,U&&j&&N.splice(N.length-2,2),i.render(0,!0,!0),F||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vp(0)):K=qe,G&&(G.value?G.style["overflow"+R.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+R.a));else if(h&&oe()&&!T)for(an=h.parentNode;an&&an!==_t;)an._pinOffset&&(Se-=an._pinOffset,ze-=an._pinOffset),an=an.parentNode;Y&&Y.forEach(function(ve){return ve.revert(!1,!0)}),L.start=Se,L.end=ze,Te=lt=Kn?he:oe(),!T&&!Kn&&(Te<he&&oe(he),L.scroll.rec=0),L.revert(!1,!0),ke=Nn(),D&&(Xe=-1,D.restart(!0)),Dn=0,i&&I&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(dn||J!==L.progress||T||_||i&&!i._initted)&&(i&&!I&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Se<-.001&&!J?we.utils.normalize(Se,ze,0):J,!0),L.progress=dn||(Te-Se)/qe===J?0:J),d&&m&&(Ge._pinOffset=Math.round(L.progress*K)),ce&&ce.invalidate(),isNaN(X)||(X-=we.getProperty(q,R.p),xe-=we.getProperty(ft,R.p),Ih(q,R,X),Ih(We,R,X-(Ye||0)),Ih(ft,R,xe),Ih(He,R,xe-(Ye||0))),dn&&!Kn&&L.update(),u&&!Kn&&!Ct&&(Ct=!0,u(L),Ct=!1)}},L.getVelocity=function(){return(oe()-lt)/(Nn()-kl)*1e3||0},L.endAnimation=function(){Bl(L.callbackAnimation),i&&(ce?ce.progress(1):i.paused()?I||Bl(i,L.direction<0,1):Bl(i,i.reversed()))},L.labelToScroll=function(se){return i&&i.labels&&(Se||L.refresh()||Se)+i.labels[se]/i.duration()*qe||0},L.getTrailing=function(se){var Oe=it.indexOf(L),Re=L.direction>0?it.slice(0,Oe).reverse():it.slice(Oe+1);return(Mi(se)?Re.filter(function(Ye){return Ye.vars.preventOverlaps===se}):Re).filter(function(Ye){return L.direction>0?Ye.end<=Se:Ye.start>=ze})},L.update=function(se,Oe,Re){if(!(T&&!Re&&!se)){var Ye=Kn===!0?he:L.scroll(),en=se?0:(Ye-Se)/qe,st=en<0?0:en>1?1:en||0,Lt=L.progress,dn,Dt,bt,ut,On,Pt,Tn,Fn;if(Oe&&(lt=Te,Te=T?oe():Ye,y&&(fe=pe,pe=i&&!I?i.totalProgress():st)),p&&d&&!Dn&&!Th&&Ni&&(!st&&Se<Ye+(Ye-lt)/(Nn()-kl)*p?st=1e-4:st===1&&ze>Ye+(Ye-lt)/(Nn()-kl)*p&&(st=.9999)),st!==Lt&&L.enabled){if(dn=L.isActive=!!st&&st<1,Dt=!!Lt&&Lt<1,Pt=dn!==Dt,On=Pt||!!st!=!!Lt,L.direction=st>Lt?1:-1,L.progress=st,On&&!Dn&&(bt=st&&!Lt?0:st===1?1:Lt===1?2:3,I&&(ut=!Pt&&O[bt+1]!=="none"&&O[bt+1]||O[bt],Fn=i&&(ut==="complete"||ut==="reset"||ut in i))),b&&(Pt||Fn)&&(Fn||f||!i)&&(Un(b)?b(L):L.getTrailing(b).forEach(function(Ki){return Ki.endAnimation()})),I||(ce&&!Dn&&!Th?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",st,i._tTime/i._tDur):(ce.vars.totalProgress=st,ce.invalidate().restart())):i&&i.totalProgress(st,!!(Dn&&(ke||se)))),d){if(se&&m&&(Ge.style[m+R.os2]=ue),!U)B(Vl(W+K*st));else if(On){if(Tn=!se&&st>Lt&&ze+1>Ye&&Ye+1>=gr(P,R),S)if(!se&&(dn||Tn)){var tn=Vr(d,!0),zt=Ye-Se;Y0(d,_t,tn.top+(R===sn?zt:0)+fn,tn.left+(R===sn?0:zt)+fn)}else Y0(d,Ge);Ta(dn||Tn?N:kt),j&&st<1&&dn||B(W+(st===1&&!Tn?K:0))}}y&&!ie.tween&&!Dn&&!Th&&D.restart(!0),a&&(Pt||A&&st&&(st<1||!Gp))&&$l(a.targets).forEach(function(Ki){return Ki.classList[dn||A?"add":"remove"](a.className)}),o&&!I&&!se&&o(L),On&&!Dn?(I&&(Fn&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(L)),(Pt||!Gp)&&(c&&Pt&&xa(L,c),V[bt]&&xa(L,V[bt]),A&&(st===1?L.kill(!1,1):V[bt]=0),Pt||(bt=st===1?1:3,V[bt]&&xa(L,V[bt]))),x&&!dn&&Math.abs(L.getVelocity())>(Gl(x)?x:2500)&&(Bl(L.callbackAnimation),ce?ce.progress(1):Bl(i,ut==="reverse"?1:!st,1))):I&&o&&!Dn&&o(L)}if(de){var an=T?Ye/T.duration()*(T._caScrollDist||0):Ye;$(an+(q._isFlipped?1:0)),de(an)}me&&me(-Ye/T.duration()*(T._caScrollDist||0))}},L.enable=function(se,Oe){L.enabled||(L.enabled=!0,vn(P,"resize",Hl),z||vn(P,"scroll",ya),le&&vn(r,"refreshInit",le),se!==!1&&(L.progress=J=0,Te=lt=Xe=oe()),Oe!==!1&&L.refresh())},L.getTween=function(se){return se&&ie?ie.tween:ce},L.setPositions=function(se,Oe,Re,Ye){if(T){var en=T.scrollTrigger,st=T.duration(),Lt=en.end-en.start;se=en.start+Lt*se/st,Oe=en.start+Lt*Oe/st}L.refresh(!1,!1,{start:B0(se,Re&&!!L._startClamp),end:B0(Oe,Re&&!!L._endClamp)},Ye),L.update()},L.adjustPinSpacing=function(se){if(ae&&se){var Oe=ae.indexOf(R.d)+1;ae[Oe]=parseFloat(ae[Oe])+se+fn,ae[1]=parseFloat(ae[1])+se+fn,Ta(ae)}},L.disable=function(se,Oe){if(se!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Oe||ce&&ce.pause(),he=0,Ae&&(Ae.uncache=1),le&&xn(r,"refreshInit",le),D&&(D.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!z)){for(var Re=it.length;Re--;)if(it[Re].scroller===P&&it[Re]!==L)return;xn(P,"resize",Hl),z||xn(P,"scroll",ya)}},L.kill=function(se,Oe){L.disable(se,Oe),ce&&!Oe&&ce.kill(),l&&delete $p[l];var Re=it.indexOf(L);Re>=0&&it.splice(Re,1),Re===Zn&&Uh>0&&Zn--,Re=0,it.forEach(function(Ye){return Ye.scroller===L.scroller&&(Re=1)}),Re||Kn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Oe||i.kill()),We&&[We,He,q,ft].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Jl===L&&(Jl=0),d&&(Ae&&(Ae.uncache=1),Re=0,it.forEach(function(Ye){return Ye.pin===d&&Re++}),Re||(Ae.spacer=0)),n.onKill&&n.onKill(L)},it.push(L),L.enable(!1,!1),ge&&ge(L),i&&i.add&&!qe){var Ue=L.update;L.update=function(){L.update=Ue,nt.cache++,Se||ze||L.refresh()},we.delayedCall(.01,L.update),qe=.01,Se=ze=0}else L.refresh();d&&Sw()},r.register=function(n){return Ma||(we=n||ix(),nx()&&window.document&&r.enable(),Ma=zl),Ma},r.defaults=function(n){if(n)for(var i in n)Rh[i]=n[i];return Rh},r.disable=function(n,i){zl=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(at,"wheel",ya),xn(yt,"scroll",ya),clearInterval(bh),xn(yt,"touchcancel",mr),xn(_t,"touchstart",mr),Eh(xn,yt,"pointerdown,touchstart,mousedown",k0),Eh(xn,yt,"pointerup,touchend,mouseup",z0),Bh.kill(),wh(xn);for(var s=0;s<nt.length;s+=3)Ah(xn,nt[s],nt[s+1]),Ah(xn,nt[s],nt[s+2])},r.enable=function(){if(at=window,yt=document,Si=yt.documentElement,_t=yt.body,we){if($l=we.utils.toArray,Wl=we.utils.clamp,Kp=we.core.context||mr,Vp=we.core.suppressOverwrites||mr,tm=at.history.scrollRestoration||"auto",jp=at.pageYOffset||0,we.core.globals("ScrollTrigger",r),_t){zl=1,ba=document.createElement("div"),ba.style.height="100vh",ba.style.position="absolute",dx(),mw(),Xt.register(we),r.isTouch=Xt.isTouch,Ts=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zp=Xt.isTouch===1,vn(at,"wheel",ya),em=[at,yt,Si,_t],we.matchMedia?(r.matchMedia=function(u){var f=we.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},we.addEventListener("matchMediaInit",function(){hx(),am()}),we.addEventListener("matchMediaRevert",function(){return ux()}),we.addEventListener("matchMedia",function(){oo(0,1),fo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Wp(),Wp})):console.warn("Requires GSAP 3.11.0 or later"),Wp(),vn(yt,"scroll",ya);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vr(_t),sn.m=Math.round(a.top+sn.sc())||0,Ln.m=Math.round(a.left+Ln.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),bh=setInterval(H0,250),we.delayedCall(.5,function(){return Th=0}),vn(yt,"touchcancel",mr),vn(_t,"touchstart",mr),Eh(vn,yt,"pointerdown,touchstart,mousedown",k0),Eh(vn,yt,"pointerup,touchend,mouseup",z0),Yp=we.utils.checkPrefix("transform"),Oh.push(Yp),Ma=Nn(),Bh=we.delayedCall(.2,oo).pause(),Sa=[yt,"visibilitychange",function(){var u=at.innerWidth,f=at.innerHeight;yt.hidden?(U0=u,O0=f):(U0!==u||O0!==f)&&Hl()},yt,"DOMContentLoaded",oo,at,"load",oo,at,"resize",Hl],wh(vn),it.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)Ah(xn,nt[l],nt[l+1]),Ah(xn,nt[l],nt[l+2])}else if(yt){var c=function u(){r.enable(),yt.removeEventListener("DOMContentLoaded",u)};yt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Gp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(bh)||(bh=i)&&setInterval(H0,i),"ignoreMobileResize"in n&&(Zp=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wh(xn)||wh(vn,n.autoRefreshEvents||"none"),Q0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=qn(n),o=nt.indexOf(s),a=uo(s);~o&&nt.splice(o,a?6:2),i&&(a?Yi.unshift(at,i,_t,i,Si,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Mi(n)?qn(n):n).getBoundingClientRect(),a=o[s?ao:lo]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Mi(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[s?ao:lo],l=i==null?a/2:i in zh?zh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ho.killAll||[];ho={},i.forEach(function(s){return s()})}},r})();rt.version="3.15.0";rt.saveStyles=function(r){return r?$l(r).forEach(function(e){if(e&&e.style){var t=yi.indexOf(e);t>=0&&yi.splice(t,5),yi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Kp())}}):yi};rt.revert=function(r,e){return am(!r,e)};rt.create=function(r,e){return new rt(r,e)};rt.refresh=function(r){return r?Hl(!0):(Ma||rt.register())&&oo(!0)};rt.update=function(r){return++nt.cache&&Gr(r===!0?2:0)};rt.clearScrollMemory=fx;rt.maxScroll=function(r,e){return gr(r,e?Ln:sn)};rt.getScrollFunc=function(r,e){return kr(qn(r),e?Ln:sn)};rt.getById=function(r){return $p[r]};rt.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Ni};rt.snapDirectional=om;rt.addEventListener=function(r,e){var t=ho[r]||(ho[r]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(r,e){var t=ho[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=we.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(m){f.length||d.restart(!0),f.push(m.trigger),h.push(m),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),vn(rt,"refresh",function(){return s=e.batchMax()})),$l(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(rt.create(c))}),t};var K0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},qp=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Si&&r(_t,t)},Lh={auto:1,scroll:1},Aw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Lh[(l=Di(s)).overflowY]||Lh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!uo(s)&&(Lh[(l=Di(s)).overflowY]||Lh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},mx=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Aw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(yt,Xt.eventTypes[0],$0,!1,!0)},onDisable:function(){return xn(yt,Xt.eventTypes[0],$0,!0)}})},Rw=/(input|label|select|textarea)/i,J0,$0=function(e){var t=Rw.test(e.target.tagName);(t||J0)&&(e._gsapAllow=!0,J0=t)},Cw=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||Si,u=we.core.globals().ScrollSmoother,f=u&&u.get(),h=Ts&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=kr(c,sn),m=kr(c,Ln),_=1,p=(Xt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,g=0,M=Un(i)?function(){return i(a)}:function(){return i||2.8},A,y,S=mx(c,e.type,!0,s),E=function(){return y=!1},T=mr,x=mr,b=function(){l=gr(c,sn),x=Wl(Ts?1:0,l),n&&(T=Wl(0,gr(c,Ln))),A=co},R=function(){h._gsap.y=Vl(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(y){requestAnimationFrame(E);var Z=Vl(a.deltaY/2),ee=x(d.v-Z);if(h&&ee!==d.v+d.offset){d.offset=ee-d.v;var L=Vl((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=nt.cache,Gr()}return!0}d.offset&&R(),y=!0},P,H,z,U,V=function(){b(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return Ts&&O.type==="touchmove"&&I(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=Vl((at.visualViewport&&at.visualViewport.scale||1)/p),P.pause(),O!==_&&qp(c,_>1.01?!0:n?!1:"x"),H=m(),z=d(),b(),A=co},e.onRelease=e.onGestureStart=function(O,Z){if(d.offset&&R(),!Z)U.restart(!0);else{nt.cache++;var ee=M(),L,le;n&&(L=m(),le=L+ee*.05*-O.velocityX/.227,ee*=K0(m,L,le,gr(c,Ln)),P.vars.scrollX=T(le)),L=d(),le=L+ee*.05*-O.velocityY/.227,ee*=K0(d,L,le,gr(c,sn)),P.vars.scrollY=x(le),P.invalidate().duration(ee).play(.01),(Ts&&P.vars.scrollY>=l||L>=l-1)&&we.to({},{onUpdate:V,duration:ee})}o&&o(O)},e.onWheel=function(){P._ts&&P.pause(),Nn()-g>1e3&&(A=0,g=Nn())},e.onChange=function(O,Z,ee,L,le){if(co!==A&&b(),Z&&n&&m(T(L[2]===Z?H+(O.startX-O.x):m()+Z-L[1])),ee){d.offset&&R();var _e=le[2]===ee,Ke=_e?z+O.startY-O.y:d()+ee-le[1],Xe=x(Ke);_e&&Ke!==Xe&&(z+=Xe-Ke),d(Xe)}(ee||Z)&&Gr()},e.onEnable=function(){qp(c,n?!1:"x"),rt.addEventListener("refresh",V),vn(at,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){qp(c,!0),xn(at,"resize",V),rt.removeEventListener("refresh",V),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=Ts,Ts&&!d()&&d(1),Ts&&we.ticker.add(mr),U=a._dc,P=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:px(d,d(),function(){return P.pause()})},onUpdate:Gr,onComplete:U.vars.onComplete}),a};rt.sort=function(r){if(Un(r))return it.sort(r);var e=at.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};rt.observe=function(r){return new Xt(r)};rt.normalizeScroll=function(r){if(typeof r>"u")return Yn;if(r===!0&&Yn)return Yn.enable();if(r===!1){Yn&&Yn.kill(),Yn=r;return}var e=r instanceof Xt?r:Cw(r);return Yn&&Yn.target===e.target&&Yn.kill(),uo(e.target)&&(Yn=e),e};rt.core={_getVelocityProp:Sh,_inputObserver:mx,_scrollers:nt,_proxies:Yi,bridge:{ss:function(){Ni||fo("scrollStart"),Ni=Nn()},ref:function(){return Dn}}};ix()&&we.registerPlugin(rt);_h.registerPlugin(rt);var ec=matchMedia("(max-width: 860px)").matches||navigator.maxTouchPoints>1,Pw=devicePixelRatio||1,Iw=document.getElementById("scene"),Hr;try{Hr=new Yu({canvas:Iw,antialias:!ec,alpha:!0,powerPreference:ec?"default":"high-performance"})}catch(r){throw dispatchEvent(new CustomEvent("onix-ready")),r}Hr.setPixelRatio(Math.min(Pw,ec?1.3:2));Hr.toneMapping=al;Hr.toneMappingExposure=1.12;Hr.outputColorSpace=Kt;Hr.setClearColor(0,0);var _r=new Os,Lw=new ta(Hr);_r.environment=Lw.fromScene(new Qu,.05).texture;var Ql=new rn(40,innerWidth/innerHeight,.1,200),hm=new Vs(16777215,2.2);hm.position.set(6,10,8);_r.add(hm);var Ea=new os(16766720,0,60,.7,.5,1.2);Ea.position.set(-9,4,-6);_r.add(Ea);_r.add(Ea.target);var Aa=new os(4091286,0,60,.7,.5,1.2);Aa.position.set(9,-2,-5);_r.add(Aa);_r.add(Aa.target);var fm=new Pr(16767392,.35,50,1.8);fm.position.set(4,6,6);_r.add(fm);function Dw(){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d");e.fillStyle="#8a8f94",e.fillRect(0,0,256,512);for(let n=0;n<900;n++){let i=Math.random()*256,s=Math.random()*512,o=20+Math.random()*90;e.strokeStyle=`rgba(${Math.random()>.5?255:40},${Math.random()>.5?255:40},${Math.random()>.5?255:40},${.04+Math.random()*.07})`,e.beginPath(),e.moveTo(i,s),e.lineTo(i,s+o),e.stroke()}let t=new Wo(r);return t.wrapS=t.wrapT=er,t}var Zi=new Jn;_r.add(Zi);var dm=Dw(),Nw=new jn({color:12831955,metalness:.95,roughness:.34,roughnessMap:dm,envMapIntensity:1.25}),pm=new gt(new rs(.34,.34,120,48,1),Nw);pm.position.y=60+1.72;Zi.add(pm);var Mx=new jn({color:10135215,metalness:.95,roughness:.4,roughnessMap:dm,envMapIntensity:1.2}),Sx=new gt(new rs(.55,.6,1.05,48),Mx);Sx.position.y=1.32;Zi.add(Sx);var bx=new gt(new rs(.42,.55,.22,48),Mx);bx.position.y=1.95;Zi.add(bx);var Uw=new jn({color:9279906,metalness:.96,roughness:.42,roughnessMap:dm,envMapIntensity:1.2});for(let r=0;r<9;r++){let e=new gt(new rs(.47,.47,.72,48),Uw);e.position.y=3.6+r*8.5,Zi.add(e)}var Wh=new Jn;Zi.add(Wh);var Tx=new Xo;Tx.onProgress=(r,e,t)=>dispatchEvent(new CustomEvent("onix-progress",{detail:e/t}));new Ju(Tx).load("./assets/drill-bit.glb",r=>{let e=r.scene,t=new zn().setFromObject(e),n=new k;t.getSize(n),e.scale.setScalar(2.9/n.y),t.setFromObject(e);let i=new k;t.getCenter(i),e.position.sub(i),e.rotation.x=Math.PI,e.traverse(s=>{s.isMesh&&s.material&&(s.material.envMapIntensity=1.35,s.material.roughness=Math.min(1,(s.material.roughness??.5)*.9))}),Wh.add(e),dispatchEvent(new CustomEvent("onix-ready"))},void 0,()=>dispatchEvent(new CustomEvent("onix-ready")));var Yh=ec?90:190,Xh=new _n,Hh=new Float32Array(Yh*3),cm=new Float32Array(Yh);for(let r=0;r<Yh;r++)Hh[r*3]=(Math.random()-.5)*22,Hh[r*3+1]=(Math.random()-.5)*18,Hh[r*3+2]=(Math.random()-.5)*14-2,cm[r]=Math.random()*100;Xh.setAttribute("position",new Gt(Hh,3));var Ow=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,1,32,32,30);return t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Wo(r)})(),um=new ns({map:Ow,size:.16,transparent:!0,opacity:.5,depthWrite:!1,color:12576495,blending:ol}),mm=new zs(Xh,um);mm.frustumCulled=!1;_r.add(mm);var gx=0,Fw=-100,qh={p:0,vel:0};rt.create({trigger:"#scrollspace",start:"top top",end:"bottom bottom",scrub:.6,onUpdate(r){qh.p=r.progress,qh.vel=Math.min(3,Math.abs(r.getVelocity())/1e3)}});document.querySelectorAll(".block").forEach(r=>{_h.fromTo(r,{autoAlpha:0,y:60,x:r.classList.contains("right")?40:-40},{autoAlpha:1,y:0,x:0,ease:"power3.out",duration:1,scrollTrigger:{trigger:r,start:"top 82%",end:"top 45%",scrub:.8}})});var Gh=[{p:0,a:[14,26,38],b:[7,14,21]},{p:.3,a:[30,26,22],b:[12,10,9]},{p:.55,a:[24,28,34],b:[9,11,15]},{p:.8,a:[10,34,44],b:[4,16,24]},{p:1,a:[8,44,54],b:[3,20,30]}];function _x(r,e,t){return[0,1,2].map(n=>Math.round(r[n]+(e[n]-r[n])*t))}function Bw(r){let e=0;for(;e<Gh.length-2&&r>Gh[e+1].p;)e++;let t=Gh[e],n=Gh[e+1],i=Ws.clamp((r-t.p)/(n.p-t.p),0,1),s=_x(t.a,n.a,i),o=_x(t.b,n.b,i);document.body.style.setProperty("--bg-a",`rgb(${s[0]},${s[1]},${s[2]})`),document.body.style.setProperty("--bg-b",`rgb(${o[0]},${o[1]},${o[2]})`)}var xx=document.getElementById("depthVal"),vx=document.body,yx=new rl,lm=0;function wx(){let r=Math.min(.05,yx.getDelta()),e=yx.elapsedTime;lm+=(qh.p-lm)*Math.min(1,r*6);let t=lm,n=gx+(Fw-gx)*t;Zi.position.y=n,Wh.rotation.y+=r*1.3,pm.rotation.y=Wh.rotation.y;let i=.006+qh.vel*.012;Zi.position.x=Math.sin(e*43)*i,Zi.position.z=Math.cos(e*37)*i;let s=-.5+Math.sin(t*Math.PI*1.4)*.9+e*.02,o=Ws.degToRad(78-t*10),a=(ec?15.5:12.8)-Math.sin(t*Math.PI)*1.6,l=n+1.9;Ql.position.set(Math.sin(s)*Math.sin(o)*a,l+Math.cos(o)*a*.42,Math.cos(s)*Math.sin(o)*a),Ql.lookAt(Zi.position.x,n+1.7,Zi.position.z);let c=Ws.smoothstep(t,.72,.95),u=Math.sin(Math.min(1,t/.6)*Math.PI);hm.intensity=2.2-c*.9,fm.intensity=.35+u*.85,Ea.intensity=30*(.25+c),Aa.intensity=26*(.2+c*.9),Ea.position.set(-9,n+4,-6),Ea.target.position.set(0,n+1,0),Aa.position.set(9,n-2,-5),Aa.target.position.set(0,n+.5,0),um.color.setHSL(.52,.5,.55+c*.25),um.opacity=.35+c*.4,mm.position.y=n*.92;let f=Xh.attributes.position.array;for(let d=0;d<Yh;d++)f[d*3]+=Math.sin(e*.4+cm[d])*.0016,f[d*3+1]+=Math.cos(e*.3+cm[d]*1.7)*.0013+8e-4,f[d*3+1]>10&&(f[d*3+1]=-10);Xh.attributes.position.needsUpdate=!0,Bw(t);let h=Math.max(0,-(n*1.2));xx&&(xx.textContent=(h<.5?"0":"-"+h.toFixed(0))+" m"),vx.classList.toggle("digging",t>.02&&t<.985),vx.classList.toggle("at-water",t>.82),Hr.render(_r,Ql),requestAnimationFrame(wx)}function Ex(){Hr.setSize(innerWidth,innerHeight),Ql.aspect=innerWidth/innerHeight,Ql.updateProjectionMatrix()}addEventListener("resize",Ex);Ex();requestAnimationFrame(wx);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
