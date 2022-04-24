import React from "react"


function Contacts (){
    return (
        <div class="flex w-full min-hs-screen justify-center items-center">
            <div class="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl rounded-xl shadow-lg text-space">
               <div class="flex flex-col space-y-8 justify-between">
               <div class="font-bold text-4xl tracking-wide">
                   <h1>Contact Us</h1>
                   <p class="pt-2 text-cyan text-sm">Please fill the form including your email for feedback</p>
               </div>
               <div class="flex flex-col space-y-4">
               <div class="inline-flex space-x-2 items-center">
                     <ion-icon 
                        name="call"
                        // class="text-teal-300 text-xl"
                     ></ion-icon>
                     <span>+(265) 992 000 097</span>
               </div>
               <div class="inline-flex space-x-2 items-center">
                     <ion-icon 
                        name="mail"
                        // class="text-teal-300 text-xl"
                     ></ion-icon>
                     <span>lexb1212@gmail.com</span>
               </div>
               <div class="flex space-x-4 text-lg">
                   <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                   <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                   <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                   <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
               </div>
                <div>
                    <div class="bg-yellow-400 rounded-xl shadow-lg p-8 text-space">
                        <form action="" class="flex flex-col space-y-4">
                            <div>
                                <label for="" class="text-sm">Your name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    class="ring-1 ring-space w-full rounded-md px-4 outline-none mt-2 focus:ring-2 focus:ring-space"></input>
                            </div>
                            <div>
                                <label for="" class="text-sm">
                                    Email Address</label>                            
                            <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    class="ring-1 ring-space w-full rounded-md px-4 outline-none mt-2 focus:ring-2 focus:ring-space"></input>
                            </div>
                            <div>
                                <label for="" class="text-sm">Massage</label>                            
                            <textarea 
                                    type="email" 
                                    placeholder="Massage" 
                                    class="ring-1 ring-space w-full rounded-md px-4 outline-none mt-2 focus:ring-2 focus:ring-space">

                                    </textarea>
                            </div>
                        </form>
                    </div>
                </div>
               </div>
               </div>
            </div>
        </div>
        
    );
    
}

export default Contacts;