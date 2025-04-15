import { ExploreSection } from '~/components/ExploreSection/ExploreSection';
import { FoodBlogs } from '~/components/FoodBlogs/FoodBlogs';
import { NewRecipesSection } from '~/components/NewRecipesSection/NewRecipesSection';
import { TopPicksSection } from '~/components/TopPicksSection/TopPicksSection';
import { VeganCuisine } from '~/components/VeganCuisine/VeganCuisine';

export const HomePage = () => (
    <>
        <ExploreSection headingTitle='Приятного аппетита!' />
        <NewRecipesSection />
        <TopPicksSection />
        <FoodBlogs />
        <VeganCuisine />
    </>
);
