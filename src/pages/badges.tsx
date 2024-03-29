import type { NextPage } from 'next'
import CardBadge from "../component/BadgeCard";
import { useRouter } from 'next/router'

const cardsData = [
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 1',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 2',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 3',
        category: 'Category C',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 4',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 5',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 6',
        category: 'Category C',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 7',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 8',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Badge 9',
        category: 'Category C',
    },
];


const Badges: NextPage = () => {
    const router = useRouter()
    const goCard = () => {
        console.log('clickedCard');
       router.push('/badge').then(res => console.log('valid : ',res)).catch(err => console.log('erreur : ',err));
    };

    return (
        <div className="container p-4">
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((cardData, index) => (
                    <CardBadge handleClick={goCard} key={index} {...cardData} />
                ))}
            </div>
        </div>
    );
}

export default Badges;
