import { useEffect, useState } from "react";
import { IProduct } from "../../../models";
import { Paginate, Dropdown } from "../../../shared";
import ProductCard from "../product-card/ProductCard";

function ProductList() {
    const BASE_URL = "http://localhost:3010/api/v1/";
    const productsPerPage = 10;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState([]);
    const [productsOffset, setProductsOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await (await fetch(`${BASE_URL}products`)).json();
            setProducts(data);
            setProductsData(data);
            setLoading(false);
        };

        const fetchCategories = async () => {
            const data = await (await fetch(`${BASE_URL}products/categories`)).json();
            setCategories(data);
        };
        fetchCategories();
        fetchProducts();
    }, []);

    useEffect(() => {
        const endOffset = productsOffset + productsPerPage;
        setCurrentProducts(products.slice(productsOffset, endOffset));
        setPageCount(Math.ceil(products.length / productsPerPage));
      }, [products, productsOffset]);

    const handlePageClick = (event: any) => {
       const newOffset = (event.selected * productsPerPage) % products.length;
       setProductsOffset(newOffset);
    };

    const handleChangeValue = (value:string) => {
        if (value === "All")
            return setProducts(productsData);
        const data = productsData.filter((p:IProduct) => p.category === value);
        setProducts(data);
    };

    return (
    <div className="products">
        {
            loading ? (<div className="loading text-md text-center">Loading...</div>) :
            (
                <>
                    {
                        products ? (
                            <>
                                <div className="w-50">
                                    <Dropdown title='Products Categories' handleChangeValue={handleChangeValue} options={categories}/>
                                </div>
                                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 md:grid-cols-2">
                                    {currentProducts?.map((product:IProduct) => (
                                        <ProductCard key={product.id} {...product}/>
                                    ))}
                                </div>
                                <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
                            </>
                        ) : (
                            <div className="empty">No Products...</div>
                          )
                    }
                </>
            )
        }
    </div>
    );
}

export default ProductList;