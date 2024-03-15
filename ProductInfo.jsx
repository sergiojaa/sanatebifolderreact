import thumb1 from '../images/thumb (1).jpg'
import thumb2 from '../images/thumb (2).png'
import thumb3 from '../images/thumb (3).jpg'
import thumb4 from '../images/thumb (4).jpg'
import thumb5 from '../images/thumb (5).jpg'
import thumb6 from '../images/thumb (6).jpg'
import thumb7 from '../images/thumb (7).jpg'
import thumb8 from '../images/thumb (8).jpg'
import thumb9 from '../images/thumb (9).jpg'
import thumb10 from '../images/thumb (10).jpg'
import thumb11 from '../images/thumb (11).jpg'
import thumb12 from '../images/thumb (12).jpg'
import thumb13 from '../images/thumb (13).jpg'
import thumb14 from '../images/thumb (14).jpg'
// import thumb15 from '../images/thumb (15).jpg'
import thumb16 from '../images/thumb (16).jpg'
import thumb17 from '../images/thumb (17).jpg'
import thumb18 from '../images/thumb (18).jpg'
import thumb19 from '../images/thumb (19).jpg'
import thumb20 from '../images/thumb (20).jpg'
import thumb21 from '../images/thumb (21).jpg'
import thumb22 from '../images/thumb (22).jpg'
import thumb23 from '../images/thumb (23).jpg'
import thumb24 from '../images/thumb (24).jpg'
import thumb25 from '../images/thumb (25).jpg'
import thumb26 from '../images/thumb (26).jpg'
import thumb27 from '../images/thumb (27).jpg'
import thumb28 from '../images/thumb (28).jpg'
// import thumb29 from '../images/thumb (29).jpg'
// import thumb30 from '../images/thumb (30).jpg'
const ProductInfo = () =>{
    const Production = [
        {
            name: 'სანათი',
            price: 10,
            imageSrc: thumb1

        },
        {
            name: 'სანათი2',
            price: 20,
            imageSrc: thumb2
        },
        {
            name: 'სანათი3',
            price: 30,
            imageSrc: thumb3
        },
        {
            name: 'სანათი4',
            price: 40,
            imageSrc: thumb4
        },
        {
            name: 'სანათი5',
            price: 50,
            imageSrc: thumb5
        },
        {
            name: 'სანათი6',
            price: 60,
            imageSrc: thumb6
        },
        {
            name: 'სანათი7',
            price: 70,
            imageSrc: thumb7
        },
        {
            name: 'სანათი8',
            price: 80,
            imageSrc: thumb8
        },
        {
            name: 'სანათი9',
            price: 90,
            imageSrc: thumb9
        },
        {
            name: 'სანათი10',
            price: 100,
            imageSrc: thumb10
        },
        {
            name: 'სანათი11',
            price:110,
            imageSrc: thumb11
        },
        {
            name: 'სანათი12',
            price:120,
            imageSrc: thumb12
        },
        {
            name: 'სანათი13',
            price:130,
            imageSrc: thumb13
        },
        {
            name: 'სანათი14',
            price:140,
            imageSrc: thumb14
        },
        // {
        //     name: 'სანათი15',
        //     price:150,
        //     imageSrc: thumb15
        // },
        {
            name: 'სანათი16',
            price:160,
            imageSrc: thumb16
        },
        {
            name: 'სანათი17',
            price:170,
            imageSrc: thumb17
        },  
        {
            name: 'სანათი18',
            price:180,
            imageSrc: thumb18
        },  
        {
            name: 'სანათი19',
            price:190,
            imageSrc: thumb19
        },
        {
            name: 'სანათი20',
            price:200,
            imageSrc: thumb20
        },
        {
            name: 'სანათი21',
            price:210,
            imageSrc: thumb21
        },
        {
            name: 'სანათი22',
            price:220,
            imageSrc: thumb22
        },
        {
            name: 'სანათი23',
            price:230,
            imageSrc: thumb23
        },
        {
            name: 'სანათი24',
            price:240,
            imageSrc: thumb24
        },
        {
            name: 'სანათი25',
            price:250,
            imageSrc: thumb25
        },
        {
            name: 'სანათი26',
            price:260,
            imageSrc: thumb26
        },
        {
            name: 'სანათი27',
            price:270,
            imageSrc: thumb27
        },
        {
            name: 'სანათი28',
            price:280,
            imageSrc: thumb28
        },
        // {
        //     name: 'სანათი29',
        //     price:290,
        //     imageSrc: thumb29
        // },
        // {
        //     name: 'სანათი30',
        //     price:300,
        //     imageSrc: thumb30
        // }

    ]
    return <div>
        {Production.map((product, index) =>(
            <div key={index} >
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <img src={product.imageSrc} alt={product.name} />
            </div>
        )
       
    )}
    </div>
}
export default ProductInfo