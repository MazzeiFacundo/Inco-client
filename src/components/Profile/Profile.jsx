import "./Profile.css"
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import CardProfile from "../CardProfile/CardProfile";
import NavBar from "../NavBar/NavBar";
import BottomHeader from "../BottomHeader/BottomHeader";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showUserData, getCurrentUser } from "../../features/products/productsSlice"
import FiltersProfile from "../FiltersProfile/FiltersProfile";


function Profile() {

    const dispatch = useDispatch();
    const currentUser = useSelector(showUserData)
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false)
    const [photoUser, setPhotoUser] = useState({});

    useEffect(() => {
        const userCredentials = window.localStorage.getItem("userCredentials");
        const userToken = JSON.parse(userCredentials);
        if (!userToken) {
            navigate("/");
        }
        const newUser = dispatch(getCurrentUser(userToken))
    }, []);

    const userProducts = currentUser.products

    const handleOpenModal = () => {
        setOpenModal(true)
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fdUserImage = new FormData();
        fdUserImage.append("photoUser", e.target.files[0], "photoUser")

        try {
            const responseProductImg = await axios.post(`https://inco-server-production.up.railway.app/users/editProfilePhoto?id=${currentUser.idUser}`,
                fdUserImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            window.location.reload();

        } catch (error) {
        }
    }

    return (
        <div className="profileContainerGeneral">
            <NavBar></NavBar>
            <div className="userData">
                <div className="btnsContainer">
                    <div className="goBackProfileContainer">
                        <a className="goBackProfile" href="/home">Go back</a>
                    </div>
                    <button className="editPBtn" onClick={() => handleOpenModal()}>Edit you profile</button>
                    {openModal &&
                        <div className="ep-modal-in-pf">
                            <EditProfileModal
                                fullName={currentUser.fullName}
                                tel={currentUser.telephone}
                                description={currentUser.description}
                                closeModal={setOpenModal}
                            >
                            </EditProfileModal>
                        </div>
                    }
                </div>

                <div className="userHeadline">
                    <div className="ep-modal-input-label-container">
                        <img className="imgUser" src={`https://inco-server-production.up.railway.app/users/getPhotoUser?userName=${currentUser.userName}`} alt="none" />
                        <label className="ep-modal-input-label">Change profile picture
                            <input
                                className="ep-modal-input"
                                type="file"
                                name="photoProfile"
                                onChange={(e) => handleSubmit(e)}
                            />
                        </label>
                    </div>

                    <div className="userHeadLineText">
                        <div className="userNameProfile">{currentUser.fullName}</div>
                        <div className="amountOfProducts">{currentUser.email}</div>
                        <div>tel: {currentUser.telephone}</div>
                    </div>
                </div>
                <div className="descriptionProfile">
                    <div className="descriptionProfileText">{currentUser.description}</div>
                </div>

            </div>
            <div className="profileContainer">


                <div className="userProducts">
                    {
                        (userProducts || []).map((e) => {
                            return <a className="linkProfileP" href={"/Home/" + e.id}>
                                <CardProfile
                                    key={e.id}
                                    id={e.id}
                                    name={e.name}
                                    description={e.description}
                                    price={e.price}
                                    productWidth={e.productWidth}
                                    productHeight={e.productHeight}
                                    rooms={e.rooms}
                                    dorms={e.dorms}
                                    bathrooms={e.bathrooms}
                                    typeOfProduct={e.typeOfProduct}
                                ></CardProfile>
                            </a>
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default Profile;