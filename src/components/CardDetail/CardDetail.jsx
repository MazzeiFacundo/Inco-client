import React, { useEffect, useState } from "react";
import "./CardDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetail, showUserData, getCurrentUser, getCurrentProductDetail, getProductsGallery, showProductGallery } from "../../features/products/productsSlice"
import NavBar from "../NavBar/NavBar";
import ImgGallery from "../ImgGallery/ImgGallery";
import BottomHeader from "../BottomHeader/BottomHeader";
import EditProductModal from "../EditProductModal/EditProductModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faExchangeAlt, faDoorOpen, faBed, faBath, faClipboard } from "@fortawesome/free-solid-svg-icons";

function CardDetail() {

    const dispatch = useDispatch();
    const currentProduct = useSelector(productDetail)
    const currentUser = useSelector(showUserData)
    const currentGallery = useSelector(showProductGallery)
    let params = useParams()

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        const userCredentials = window.localStorage.getItem("userCredentials");
        const userToken = JSON.parse(userCredentials);
        const currentUser = dispatch(getCurrentUser(userToken))
        const currentProduct = dispatch(getCurrentProductDetail(params.id))
        const galleryCurrent = dispatch(getProductsGallery(params.id))
    }, []);

    return (
        <div className="detail-p-general-container">
            <NavBar></NavBar>
            {/* <div className="goBackCardDetailContainer">
                <FontAwesomeIcon icon={faCircleChevronLeft} className='btnGoBack' />
                <a className="goBackCardDetail" href="/home">Go back</a>
            </div> */}
            {
                (currentProduct || []).map((e) => {
                    return (
                        <div className="detail-p-container">
                            <div className="detail-p-gallery-component-container">
                                <div className="detail-p-img-container">
                                    <img className="detail-p-img" src={`https://inco-server-production.up.railway.app/display/getPhotoProduct?id=${e.id}`} alt="none" />
                                </div>
                                <ImgGallery className="detail-p-gallery-imgs-container" id={e.id}></ImgGallery>
                            </div>

                            <div className="detail-p-all-text-container">
                                <div className="detail-p-header-container">
                                    <div className="detail-p-name-text">{e.name}</div>

                                    {
                                        currentUser.idUser === e.UserIdUser && (
                                            <button className="detail-p-edit-p-btn" onClick={() => handleOpenModal()}>Edit</button>
                                        )
                                    }
                                    {
                                        currentUser.idUser === e.UserIdUser && (
                                            <div className="detail-p-edit-p-btn-container">
                                               
                                                {openModal &&
                                                    <EditProductModal
                                                        userId={currentUser.idUser}
                                                        pId={e.id}
                                                        pName={e.name}
                                                        pDescription={e.description}
                                                        pPrice={e.price}
                                                        pLocation={e.location}
                                                        pRooms={e.rooms}
                                                        pDorms={e.dorms}
                                                        pBathrooms={e.bathrooms}
                                                        pWidth={e.productWidth}
                                                        pHeight={e.productHeight}
                                                        pTypeOfProduct={e.typeOfProduct}
                                                        pTypeOfDeal={e.typeOfDeal}
                                                        galleryLenght={currentGallery}
                                                        closeModal={setOpenModal}
                                                    />
                                                }
                                            </div>
                                        )
                                    }
                                    {
                                        e.secondTypeOfDeal ? (
                                            <div className="detail-p-type-of-text-container">
                                                <div className="detail-p-type-of-text">{e.typeOfProduct + " for " + e.typeOfDeal.toLowerCase()}</div>
                                                <div className="detail-p-type-of-two-text">{"or " + e.secondTypeOfDeal.toLowerCase()}</div>
                                            </div>
                                        ) : <div className="detail-p-type-of-text">{e.typeOfProduct + " for " + e.typeOfDeal.toLowerCase()}</div>

                                    }




                                    <div className="detail-p-location">{"Located in " + e.location}</div>
                                    <div className="detail-p-price-text">{"USD " + "$" + e.price}</div>

                                    <div className="detail-p-accomodations-container">
                                        <FontAwesomeIcon icon={faDoorOpen} className='detail-p-accomodations-icon'></FontAwesomeIcon>
                                        <div className="detail-p-accomodations-text">{e.rooms + " Rooms"}</div>
                                        <FontAwesomeIcon icon={faBed} className='detail-p-accomodations-icon'></FontAwesomeIcon>
                                        <div className="detail-p-accomodations-text">{e.dorms + " Dormitories"}</div>
                                        <FontAwesomeIcon icon={faBath} className='detail-p-accomodations-icon'></FontAwesomeIcon>
                                        <div className="detail-p-accomodations-text">{e.bathrooms + " Bathrooms"}</div>
                                    </div>

                                    <div className="detail-p-measurements-container">
                                        <FontAwesomeIcon icon={faExchangeAlt} className='detail-p-measurements-icon'></FontAwesomeIcon>
                                        <div className="detail-p-measurements-text">{"Sqft: " + e.productWidth + "Sqft"}</div>
                                        <FontAwesomeIcon icon={faLongArrowAltUp} className='detail-p-measurements-icon'></FontAwesomeIcon>
                                        <div className="detail-p-measurements-text">{"Height: " + e.productHeight + "ft"}</div>
                                    </div>
                                </div>


                                <div className="detail-p-description-text-container">
                                    <div className="detail-p-description-text">{e.description}</div>
                                </div>
                                <div className="detail-p-user-data-container">
                                    <img className="detail-p-user-img" src={`https://inco-server-production.up.railway.app/users/getPhotoUser?userName=${e.User.userName}`} alt="none" />
                                    <div className="detail-p-user-text-container">
                                        <div className="detail-p-user-name-text">{e.User.fullName}</div>
                                        <div className="detail-p-user-email-text">{e.User.email}</div>
                                        <div className="detail-p-user-tel-text">{"Contact number: " + e.User.telephone}</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })
            }
            {/* <BottomHeader></BottomHeader> */}
        </div>
    )
}

export default CardDetail;