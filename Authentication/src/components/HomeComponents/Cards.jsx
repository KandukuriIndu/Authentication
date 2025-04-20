import React from 'react'
import LunchTabData from './LunchTabData'
import CurrentOrder from './CurrentOrder'
import SaladTabData from './SaladTabData'
import BurgerTabData from './BurgerTabData'
import CoffesTabData from './CoffesTabData'
import DessertTabData from './DessertTabData'

const Cards = () => {
    return (
        <>
                <div className='Card-desert-subparent'>
                    <div className='row sub-row-point'>
                        <div className="col-md-12 col-lg-8 half-screen">
                            <nav>
                                <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                    <button class="nav-link active border-0 p-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                        <div className="col-md-2 card-data">
                                            <div className='card-images'>
                                                <img src="/Images/items1.svg" alt="" />
                                            </div>
                                            <div className='card-database'>
                                                <h2>Lunch</h2>
                                                <p>8 Options</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button class="nav-link border-0 p-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-salad" type="button" role="tab" aria-controls="nav-salad" aria-selected="false">
                                        <div className="col-md-2 card-data">
                                            <div className='card-images'>
                                                <img src="/Images/items2.svg" alt="" />
                                            </div>
                                            <div className='card-database'>
                                                <h2>Salad</h2>
                                                <p>14 Salads</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button class="nav-link border-0 p-0" id="nav-burger-tab" data-bs-toggle="tab" data-bs-target="#nav-burger" type="button" role="tab" aria-controls="nav-burger" aria-selected="false">
                                        <div className="col-md-2 card-data">
                                            <div className='card-images'>
                                                <img src="/Images/items3.svg" alt="" />
                                            </div>
                                            <div className='card-database'>
                                                <h2>Burger</h2>
                                                <p>8 Burger</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button class="nav-link border-0 p-0" id="nav-coffee-tab" data-bs-toggle="tab" data-bs-target="#nav-coffee" type="button" role="tab" aria-controls="nav-coffee" aria-selected="false">
                                        <div className="col-md-2 card-data">
                                            <div className='card-images'>
                                                <img src="/Images/items4.svg" alt="" />
                                            </div>
                                            <div className='card-database'>
                                                <h2>Coffee</h2>
                                                <p>7 Beverages</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button class="nav-link border-0 p-0" id="nav-dessert-tab" data-bs-toggle="tab" data-bs-target="#nav-dessert" type="button" role="tab" aria-controls="nav-dessert" aria-selected="false">
                                        <div className="col-md-2 card-data">
                                            <div className='card-images'>
                                                <img src="/Images/items5.svg" alt="" />
                                            </div>
                                            <div className='card-database'>
                                                <h2>Desserts</h2>
                                                <p>8 Desserts</p>
                                            </div>
                                        </div>
                                    </button>

                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <LunchTabData />
                                </div>
                                <div class="tab-pane fade show" id="nav-salad" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <SaladTabData />
                                </div>
                                <div class="tab-pane fade show" id="nav-burger" role="tabpanel" aria-labelledby="nav-burger-tab">
                                    <BurgerTabData />
                                </div>
                                <div class="tab-pane fade show" id="nav-coffee" role="tabpanel" aria-labelledby="nav-coffee-tab">
                                    <CoffesTabData />
                                </div>
                                <div class="tab-pane fade show" id="nav-dessert" role="tabpanel" aria-labelledby="nav-dessert-tab">
                                    <DessertTabData />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <CurrentOrder />
                        </div>
                    </div>
                    
                </div>
               
        </>
    )
}

export default Cards