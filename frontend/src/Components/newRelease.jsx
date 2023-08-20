import React from 'react';
import "../App.css";
import Card from "./Card";
import pic1 from "../images/pic1.jpeg";
import axios from "axios";

const newRelease = () => {
    const [podcast, setPodcast] = React.useState([]);

    console.log(process.env.NODE_ENV)
    React.useEffect(() => {
        axios.get(window.location.origin + "/newRelease/").then((res) => {
            console.log(res.data?.podcast);
            setPodcast(res.data?.podcast);
        });
    }, []);
    if (!podcast) {
        return <div>loading...</div>;
    }
    return (
        <>
            <h3 className='new-release'>New Releases</h3>
            {
                podcast.map((podcast) => <Card key={podcast.pid} pid={podcast.pid} favourite={true}
                                               category={podcast.category}
                                               heading={podcast.title}/>
                )
            }

            {/*<Card pic={pic1} favourite={true} category={"Horror and Adventure"} heading={"Sunday Suspense"}/>*/}

        </>
    )
}

export default newRelease
