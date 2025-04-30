import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

  export default function ProductCard({product}) {
    return (
        <Card>
            <CardHeader>
                <img src={product.image} alt={product.name}/>
            </CardHeader>
            <CardContent>
                <span>{product.name}</span>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                
            </CardContent>
        </Card>
    )
  }
  