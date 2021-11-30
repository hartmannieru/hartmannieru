import { Button } from "../Button"
import PreviewImg from '../../images/preview-portfolio.png';

export const PreviewPortfolio = () => {
  return (
    <section className="home__about preview-portfolio">
      <h2 className='preview-portfolio__title'>Get’s started</h2>          
      <p className='preview-portfolio__description small'>I am actively developing and improving my knowledge in design and development. I suggest you familiarize yourself with my portfolio</p> 
      <img src={PreviewImg} alt={"preview-portfolio"} />
      <Button>Portfolio</Button>
    </section>
  )
}
 