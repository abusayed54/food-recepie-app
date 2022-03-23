import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient } from "./Popular";
const Veggi = () => {

    const [veggi, setVeggi] = useState([])
    useEffect(() => {
        getVeggi()
    }, [])



    const getVeggi = async () => {
        const checkStorage = localStorage.getItem("veggi")
        if (checkStorage) {
            setVeggi(JSON.parse(checkStorage))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json()

            localStorage.setItem("veggi", JSON.stringify(data.recipes))

            setVeggi(data.recipes)
            console.log(data)
        }
    }
    return <div>
        <Wrapper>
            <h3>Our Vegiterian Picks</h3>

            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem"
            }}>

                {veggi.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title.slice(0, 27)}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
};

export default Veggi;