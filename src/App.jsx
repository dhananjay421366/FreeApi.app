import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="md:p-24 page_main__WunS6 w-min md:w-auto">
                {/* <div className="page_description__ihOGI  md:flex md:justify-between md:px-[200px]">
          <a href="https://github.com/hiteshchoudhary/apihub" target="_blank">
            <span class="text-sm md:text-md">Need of every developer</span>
          </a>
          <div className="md:flex hidden">
            <a href="https://youtube.com/hiteshchoudharydotcom" target="_blank">
              Learn with your own APIs
            </a>
          </div>
        </div> */}
                <div class="page_description__ihOGI flex justify-between md:px-32"><a href="https://github.com/hiteshchoudhary/apihub" target="_blank"><span class="text-sm md:text-md">Need of every developer</span></a><code class="page_code__6jdGX"></code><div><a href="https://youtube.com/hiteshchoudharydotcom" target="_blank">Learn with your own APIs</a></div></div>
                <div class="page_center__diPtZ">
                    <h1 class="text-5xl text-bold">FreeApi.app</h1>
                </div>
                <div className="flex justify-center">
                    {" "}
                    <a
                        href="https://github.com/hiteshchoudhary/apihub"
                        class="bg-yellow-500  justify-center w-auto text-black font-medium p-2 px-4 rounded-lg"
                        target="_blank"
                    >
                        A project by Hitesh Choudhary and team
                    </a>
                </div>

                <div class="page_grid__8s97H  md:grid  gap-12 md:gap-0 md:mt-8">
                    <a
                        class="page_card__iAZT9"
                        target="_blank"
                        href="https://api.freeapi.app"
                    >
                        <h2>
                            Cooked in Docs <span>-&gt;</span>
                        </h2>
                        <p>
                            Docs are cooked directly inside the project in easy to use
                            swagger. With Swagger, you can read, learn and execute code within
                            docs.
                        </p>
                    </a>
                    <a
                        target="_blank"
                        class="page_card__iAZT9"
                        href="https://www.youtube.com/watch?v=xJq0EQMFGyg&amp;list=PLRAV69dS1uWSx4erHGq8hW_GE-Eaj60r-"
                    >
                        <h2>
                            Setup videos <span>-&gt;</span>
                        </h2>
                        <p>
                            Setup for an open source project can be challenging. We got you
                            covered. Visit here to access all videos that will help you to
                            have a complete setup of the project as well as some special
                            configuration.
                        </p>
                    </a>
                    <a
                        href="https://github.com/hiteshchoudhary/apihub"
                        class="page_card__iAZT9"
                        target="_blank"
                    >
                        <h2>
                            Get project <span>-&gt;</span>
                        </h2>
                        <p>Project is directly available on github to access. </p>
                        <span class="text-yellow-500 p-1 rounded">
                            Click here to access it.
                        </span>
                    </a>
                    <a href="#" class="page_card__iAZT9" target="_blank">
                        <h2>
                            Featured <span>-&gt;</span>
                        </h2>
                        <p>Here are some of the featured projects sent to us by users</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
