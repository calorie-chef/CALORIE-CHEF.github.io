// import {OutlineButton} from '../../Globalstyles';
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/3.jpg';
import Img4 from '../../images/4.jpg';
import Img5 from '../../images/5.jpg';
import Img6 from '../../images/6.jpg';
import Img7 from '../../images/7.jpg';
import Img8 from '../../images/8.jpg';
import Img9 from '../../images/9.jpg';
import Img10 from '../../images/10.jpg';
import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
} from './Recipes.styles';
// const Recipes = () => {
//     return (
//         <div id="menu">
//             <RecipeWrapper>
//                 <RecipeContainer>
//                     <RecipeTitle>Menu</RecipeTitle>
//                     <RecipeContentContainer>
//                         <RecipeTabContainer>
//                             <RecipeBtn to='/sea-food'>
//                                 <OutlineButton big bigFont bigRadius>Sea Food</OutlineButton>
//                             </RecipeBtn>
//                             <RecipeBtn to='/Vegetarian'>
//                                 <OutlineButton big bigFont bigRadius>Vegetarian</OutlineButton>  
//                             </RecipeBtn>
//                             <RecipeBtn to='/meat'>
//                                 <OutlineButton big bigFont bigRadius>Meat and Poultry</OutlineButton>
//                             </RecipeBtn>
//                             <RecipeBtn to='/easy-preps'>
//                                 <OutlineButton big bigFont bigRadius>Easy meal preps</OutlineButton>  
//                             </RecipeBtn>
//                         </RecipeTabContainer>
//                         <RecipeCardWrapper>
//                             <RecipeFeature>
//                                 <RecipeImg src={SalmonImg} alt="Salmon Recipe"/>
//                                 <RecipeFeatureContent>
//                                     <RecipeFeatureTitle>
//                                         Salmon and Hot Honey Butter
//                                     </RecipeFeatureTitle>
//                                     <RecipeFeatureText>
//                                         The hot honey kinda sounds like a hype name used before the 20s, (I used it back then). 
//                                         It’s a pefect coating for the salmon to enrinch it with sweetness and heat. 
//                                     </RecipeFeatureText>
//                                     <RecipeFeatureDetails>
//                                         <RecipeFeatureItem>
//                                             <RecipeItemTitle>Serving</RecipeItemTitle>
//                                             <RecipeItemContent>
//                                                 <RecipeItemIcon/>
//                                                 <RecipeItemText>2</RecipeItemText>
//                                             </RecipeItemContent>

//                                         </RecipeFeatureItem>
//                                         <RecipeFeatureItem>
//                                             <RecipeItemTitle>Cook time</RecipeItemTitle>
//                                             <RecipeItemText>35-45 min</RecipeItemText>
//                                         </RecipeFeatureItem>
//                                         <RecipeFeatureItem>
//                                             <RecipeItemTitle>Difficulty level</RecipeItemTitle>
//                                             <RecipeItemText>20%</RecipeItemText>
//                                         </RecipeFeatureItem>

//                                     </RecipeFeatureDetails> 
//                                 </RecipeFeatureContent>
//                             </RecipeFeature>
//                             <RecipeCardSection>
//                                 <RecipeSmallCards>
//                                     <RecipeCard>
//                                         <Img src={ChickenImg} alt="Chicken Recipe"/>
//                                         <RecipeCardContent>
//                                             <RecipeCardHeading>
//                                                 Pretzel-Crusted Chicken
//                                             </RecipeCardHeading>
//                                             <RecipeCardDetails>
//                                                 <RecipeCardItems>
//                                                         <RecipeCardTitle>Serving</RecipeCardTitle>
//                                                         <RecipeCardItem>
//                                                             <RecipeCardIcon/>
//                                                             <RecipeCardText>2</RecipeCardText>
//                                                         </RecipeCardItem>

//                                                     </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Cook time</RecipeCardTitle>
//                                                     <RecipeCardText>30-45 min</RecipeCardText>
//                                                 </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Difficulty level</RecipeCardTitle>
//                                                     <RecipeCardText>20%</RecipeCardText>
//                                                 </RecipeCardItems>

//                                             </RecipeCardDetails>
//                                         </RecipeCardContent>

//                                     </RecipeCard>
//                                     <RecipeCard>
//                                         <Img src={SaladImg} alt="Salad Recipe"/>
//                                         <RecipeCardContent>
//                                             <RecipeCardHeading>
//                                                  Sesame Asian Salad
//                                             </RecipeCardHeading>
//                                             <RecipeCardDetails>
//                                                 <RecipeCardItems>
//                                                         <RecipeCardTitle>Serving</RecipeCardTitle>
//                                                         <RecipeCardItem>
//                                                             <RecipeCardIcon/>
//                                                             <RecipeCardText>2</RecipeCardText>
//                                                         </RecipeCardItem>

//                                                     </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Cook time</RecipeCardTitle>
//                                                     <RecipeCardText>10-15 min</RecipeCardText>
//                                                 </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Difficulty level</RecipeCardTitle>
//                                                     <RecipeCardText>10%</RecipeCardText>
//                                                 </RecipeCardItems>

//                                             </RecipeCardDetails>
//                                         </RecipeCardContent>

//                                     </RecipeCard>
//                                 </RecipeSmallCards>
//                                 <RecipeSmallCards>
//                                     <RecipeCard>
//                                         <Img src={PizzaImg} alt="Pizza Recipe"/>
//                                         <RecipeCardContent>
//                                             <RecipeCardHeading>
//                                                 Italian Pizza with Cheese
//                                             </RecipeCardHeading>
//                                             <RecipeCardDetails>
//                                                 <RecipeCardItems>
//                                                         <RecipeCardTitle>Serving</RecipeCardTitle>
//                                                         <RecipeCardItem>
//                                                             <RecipeCardIcon/>
//                                                             <RecipeCardText>2</RecipeCardText>
//                                                         </RecipeCardItem>

//                                                     </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Cook time</RecipeCardTitle>
//                                                     <RecipeCardText>30-45 min</RecipeCardText>
//                                                 </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Difficulty level</RecipeCardTitle>
//                                                     <RecipeCardText>20%</RecipeCardText>
//                                                 </RecipeCardItems>

//                                             </RecipeCardDetails>
//                                         </RecipeCardContent>

//                                     </RecipeCard>
//                                     <RecipeCard>
//                                         <Img src={PastaImg} alt="Pasta Recipe"/>
//                                         <RecipeCardContent>
//                                             <RecipeCardHeading>
//                                                Pasta with creamy sause
//                                             </RecipeCardHeading>
//                                             <RecipeCardDetails>
//                                                 <RecipeCardItems>
//                                                         <RecipeCardTitle>Serving</RecipeCardTitle>
//                                                         <RecipeCardItem>
//                                                             <RecipeCardIcon/>
//                                                             <RecipeCardText>2</RecipeCardText>
//                                                         </RecipeCardItem>

//                                                     </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Cook time</RecipeCardTitle>
//                                                     <RecipeCardText>10-15 min</RecipeCardText>
//                                                 </RecipeCardItems>
//                                                 <RecipeCardItems>
//                                                     <RecipeCardTitle>Difficulty level</RecipeCardTitle>
//                                                     <RecipeCardText>10%</RecipeCardText>
//                                                 </RecipeCardItems>

//                                             </RecipeCardDetails>
//                                         </RecipeCardContent>

//                                     </RecipeCard>
//                                 </RecipeSmallCards>

//                             </RecipeCardSection>
                            
//                         </RecipeCardWrapper>
//                     </RecipeContentContainer>
//                 </RecipeContainer>
//             </RecipeWrapper>
            
//         </div>
//     );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
function Recipes() {
    return (
        <div id="menu">
            <RecipeWrapper>
            <RecipeContainer>
            <RecipeTitle>Menu</RecipeTitle>
            <div className="container">
          <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img3}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img4}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img5}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img6}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img7}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img8}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img9}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img10}  />
            </SwiperSlide>
          </Swiper>
        </div>
            </RecipeContainer>
            </RecipeWrapper>
        </div>
      );
}
 export default Recipes;
