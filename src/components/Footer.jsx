import React from 'react'

export const Footer = () => {
  return (
    <footer className='relative text-sm text-center'>
        <div className="relative">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 104.34449760765548,231.60765550239236 208.68899521531097,263.2153110047847 304,263 C 399.31100478468903,262.7846889952153 485.5885167464115,230.74641148325355 589,209 C 692.4114832535885,187.25358851674645 812.956937799043,175.79904306220098 909,188 C 1005.043062200957,200.20095693779902 1076.5837320574162,236.05741626794259 1161,242 C 1245.4162679425838,247.94258373205741 1342.7081339712918,223.9712918660287 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 106.04784688995213,417.09090909090907 212.09569377990425,434.18181818181813 302,431 C 391.90430622009575,427.81818181818187 465.665071770335,404.3636363636364 554,407 C 642.334928229665,409.6363636363636 745.244019138756,438.3636363636363 838,453 C 930.755980861244,467.6363636363637 1013.3588516746411,468.18181818181824 1112,457 C 1210.641148325359,445.81818181818176 1325.3205741626793,422.9090909090909 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg> 
        </div>
        <div className='absolute inset-0 grid place-content-center'>
            <p className='mt-16'>Fusion Design © {new Date().getFullYear()} </p>
        </div>
    </footer>
  )
}
