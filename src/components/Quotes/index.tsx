import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselWrapper, Carousel, QuoteWrapper } from "./QuotesElements";

const QuotesSection = () => {

    const quotes = [
        "I did not think I'd get such good support. So thank you! Someone get you a promotion.",
        "You're a lifesaver, honestly.",
        "You helped me get my campaign live and understand what the problem was. Thiswas a BIG help. My client will be delighted!",
        "Perfect! That's astoundingly brilliant service, Menno. I'm really impressed."
    ]

    return (
        <CarouselWrapper>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2000} showIndicators={false} showStatus={false} showArrows={false} >
                {
                    quotes.map((quote) => {
                        return (
                            <QuoteWrapper key={quote} >"{quote}"</QuoteWrapper>
                        )
                    })
                }
            </Carousel>
        </CarouselWrapper>
    )
}

export default QuotesSection

