import {useRouteError} from "react-router-dom";

export const NotFound = ()=> {
    const error = useRouteError();
    if (error.status === 404){
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img
                        src="http://cdn.dribble.com/user/7222246/screenshotes/30661818/404-page.gif"
                        alt="404 page"
                         />
                    </figure>
                    <div className="text-center" >
                        <p className="p-a">
                            .The page you were Lokking for could not be found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                </div>
                <navLink to="/" className="btn">
                Go To The Home page
                </navLink>
            </section>
        );
    };
    console.log(error);
    return <h1>The page you are Looking does not exist</h1>;
};