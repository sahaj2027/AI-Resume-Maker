import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <div>
      {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
      {/* <Header/> */}
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          
         
        </div>
        "M74.9361 17.4611C74.9361 16.1521 73.9305 15.3588 72.6239 15.3588H69.1216V19.5389H72.6248C73.9313 19.5389 74.9369 18.7457 74.9369 17.4611H74.9361ZM65.8047 28.2977V12.439H73.0901C76.4778 12.439 78.3213 14.7283 78.3213 17.4611C78.3213 20.1702 76.4542 22.4588 73.0901 22.4588H69.1216V28.2977H65.8055H65.8047ZM80.3406 28.2977V16.7362H83.3044V18.2543C84.122 17.2731 85.501 16.4563 86.9027 16.4563V19.3518C86.6912 19.3054 86.4349 19.2826 86.0851 19.2826C85.1039 19.2826 83.7949 19.8424 83.3044 20.5681V28.2977H80.3397H80.3406ZM96.8802 22.3652C96.8802 20.6136 95.8503 19.0955 93.9823 19.0955C92.1364 19.0955 91.1105 20.6136 91.1105 22.366C91.1105 24.1404 92.1364 25.6585 93.9823 25.6585C95.8503 25.6585 96.8794 24.1404 96.8794 22.3652H96.8802ZM88.0263 22.3652C88.0263 19.1663 90.2684 16.4563 93.9823 16.4563C97.7198 16.4563 99.962 19.1655 99.962 22.3652C99.962 25.5649 97.7198 28.2977 93.9823 28.2977C90.2684 28.2977 88.0263 25.5649 88.0263 22.3652ZM109.943 24.3739V20.3801C109.452 19.6316 108.378 19.0955 107.396 19.0955C105.693 19.0955 104.524 20.4265 104.524 22.366C104.524 24.3267 105.693 25.6585 107.396 25.6585C108.378 25.6585 109.452 25.1215 109.943 24.3731V24.3739ZM109.943 28.2977V26.5697C109.054 27.6899 107.841 28.2977 106.462 28.2977C103.637 28.2977 101.465 26.1499 101.465 22.3652C101.465 18.6993 103.59 16.4563 106.462 16.4563C107.793 16.4563 109.054 17.0177 109.943 18.1843V12.439H112.932V28.2977H109.943ZM123.497 28.2977V26.5925C122.727 27.4337 121.372 28.2977 119.526 28.2977C117.052 28.2977 115.884 26.9431 115.884 24.7473V16.7362H118.849V23.5798C118.849 25.1451 119.666 25.6585 120.927 25.6585C122.071 25.6585 122.983 25.028 123.497 24.3731V16.7362H126.463V28.2977H123.497ZM128.69 22.3652C128.69 18.9092 131.212 16.4563 134.67 16.4563C136.982 16.4563 138.383 17.4611 139.131 18.4886L137.191 20.3093C136.655 19.5153 135.838 19.0955 134.81 19.0955C133.011 19.0955 131.751 20.4037 131.751 22.366C131.751 24.3267 133.011 25.6585 134.81 25.6585C135.838 25.6585 136.655 25.1915 137.191 24.4203L139.131 26.2426C138.383 27.2702 136.982 28.2977 134.67 28.2977C131.212 28.2977 128.69 25.8456 128.69 22.3652ZM141.681 25.1915V19.329H139.813V16.7362H141.681V13.6528H144.648V16.7362H146.935V19.329H144.648V24.3975C144.648 25.1215 145.02 25.6585 145.675 25.6585C146.118 25.6585 146.541 25.495 146.702 25.3087L147.334 27.5728C146.891 27.9714 146.096 28.2977 144.857 28.2977C142.779 28.2977 141.681 27.2238 141.681 25.1915ZM165.935 28.2977V21.454H158.577V28.2977H155.263V12.439H158.577V18.5577H165.935V12.4398H169.275V28.2977H165.935ZM179.889 28.2977V26.5925C179.119 27.4337 177.764 28.2977 175.919 28.2977C173.443 28.2977 172.276 26.9431 172.276 24.7473V16.7362H175.241V23.5798C175.241 25.1451 176.058 25.6585 177.32 25.6585C178.464 25.6585 179.376 25.028 179.889 24.3731V16.7362H182.856V28.2977H179.889ZM193.417 28.2977V21.1986C193.417 19.6333 192.602 19.0963 191.339 19.0963C190.172 19.0963 189.285 19.7504 188.77 20.4045V28.2985H185.806V16.7362H188.77V18.1843C189.495 17.3439 190.896 16.4563 192.718 16.4563C195.217 16.4563 196.408 17.8573 196.408 20.0523V28.2977H193.418H193.417ZM199.942 25.1915V19.329H198.076V16.7362H199.943V13.6528H202.91V16.7362H205.198V19.329H202.91V24.3975C202.91 25.1215 203.282 25.6585 203.936 25.6585C204.38 25.6585 204.802 25.495 204.965 25.3087L205.595 27.5728C205.152 27.9714 204.356 28.2977 203.119 28.2977C201.04 28.2977 199.943 27.2238 199.943 25.1915" fill="currentColor"/>
                    </svg>                       
                                                 
                </a>         
            </div>
        </div> 
    </div>


<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>

      </a>

      <a
  
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      </a>
    </div>
    </section>
  </div>
 
    </div>
  )
}

export default Home
