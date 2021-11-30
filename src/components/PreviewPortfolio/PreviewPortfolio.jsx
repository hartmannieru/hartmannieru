import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import { Button } from "../Button"
import PreviewImgLight from '../../images/preview-portfolio.png';
import PreviewImgDark from '../../images/preview-portfolio-dark.png';

export const PreviewPortfolio = () => {
  const { mode } = useContext(CustomContext);

  return (
    <section className="home__about preview-portfolio">
      <h2 className='preview-portfolio__title'>Get’s started</h2>          
      <p className='preview-portfolio__description small'>I am actively developing and improving my knowledge in design and development. I suggest you familiarize yourself with my portfolio</p> 
      <img src={mode === 'light' ? PreviewImgLight : PreviewImgDark} alt={"preview-portfolio"} />
      <Button>Portfolio</Button>
    </section>
  )
}
