import { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    //products - variable conatining all products to display
    //setProducts - function to change products variable
    const [products, setProducts] = useState([]);

    //----------------- useEffect explanation -----------------
    //similar to componentDidMount() and componentDidUpdate()
    //componentDidMount() - is invoked immediately after a component is mounted (inserted into the tree).
    //If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Refer: https://reactjs.org/docs/react-component.html#componentdidmount
    //componentDidUpdate() - is invoked immediately after updating occurs. This method is not called for the initial render.
    //Use this as an opportunity to operate on the DOM when the component has been updated. Refer: https://reactjs.org/docs/react-component.html#componentdidupdate

    //useEffect() hook accepts 2 arguments: ie. useEffect(callback[, dependencies]);
    //dependencies:
    //  - Not provided: the side-effect runs after every rendering.
    //  - An empty array []: the side-effect runs once after the initial rendering.
    //  - Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes. Refer: https://dmitripavlutin.com/react-useeffect-explanation/#2-the-dependencies-of-useeffect
    //Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. Refer: https://reactjs.org/docs/hooks-effect.html#example-using-hooks
    useEffect(() => {
        const fetchProducts = async () => {
            //const res = await axios.get('/api/products')
            const { data } = await axios.get('/api/products')
            //using setProducts function to change products variable
            setProducts(data);
        }

        //to get all products
        fetchProducts();
    }, [])  //running useEffect at initial rendering of component

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen