import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err);
     return(
        <div className="text-center mt-16">
        <h1 className="font-medium text-8xl"> OOPS </h1>
        <h2 className="font-medium text-5xl">Something Went Wrong</h2>
        <img className="m-auto mt-6 " src="data:image/png;base64,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" alt="image not found"/>
        <h3 className="font-medium text-3xl">
            {err.status}: {err.statusText}
        </h3>
        </div>
     );
};
export default Error;