import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {
    return (
        <div>
            <div className='w-[100%] h-[100%] p-5 bg-gradient-to-r from-cyan-500 to-blue-500'>
                <Link to='/home' className='text-white font-mono '><span className='mx-3'>
                    <FontAwesomeIcon icon={faLongArrowLeft}></FontAwesomeIcon>
                </span>Back</Link>
                <div className='md:flex items-center justify-evenly text-center'>
                    <div className='animate-pulse border shadow-2xl rounded'>
                        <img src={require('../../img/neymar.png')} alt="" />
                    </div>
                    <h1 className='text-7xl font-bold text-white font-mono'>vs</h1>
                    <div className='animate-pulse  border shadow-2xl rounded'>
                        <img src={require('../../img/ronaldo.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-8 px-10'>
                <div>
                    <h1 className='text-5xl font-mono py-3 text-slate-600 font-bold'>Neymar</h1>
                    <p className='text-left text-2xl font-mono py-2 text-slate-300 font-bold'>Neymar da Silva Santos Júnior, known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. He is widely regarded as one of the best players in the world. Wikipedia
                        Born: February 5, 1992 (age 30 years), Mogi das Cruzes, State of São Paulo, Brazil
                        Height: 1.75 m
                        Full name: Neymar da Silva Santos Júnior
                        Current teams: Paris Saint-Germain F.C. (#10 / Forward), Brazil national football team (#10 / Forward), Brazil
                        Children: Davi Lucca
                        Parents: Neymar Santos Sr., Nadine Santos
                        and most international appearances by a European male (186). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country.
                        and most international appearances by a European male (186). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country.
                        </p>
                </div>
                <div>
                    <h1 className='text-5xl font-mono py-3 text-slate-600 font-bold'>Ronaldo</h1>
                    <p className='text-left text-2xl font-mono py-2 text-slate-300 font-bold'>
                    Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards[note 3] and four European Golden Shoes, the most by a European player. He has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, one UEFA European Championship, and one UEFA Nations League. Ronaldo holds the records for most appearances (183), most goals (140), and assists (42) in the Champions League, most goals in the European Championship (14), most international goals by a male player (115), and most international appearances by a European male (186). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;