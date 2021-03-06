import React, { useState } from 'react'
import anime from 'animejs'
import styled from 'styled-components'
/* animation */
import { Player, Controls } from '@lottiefiles/react-lottie-player'
/* animation data */
import TypographyMotion from '../assets/json/animation/typography.json';
/* @material-ui icons */
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
/* components */
import Link from '../components/Link'
import MotionText from '../components/Text'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
/* resources */
import '../assets/css/font.css'
import Icon from '../assets/images/icon.jpeg'
import SoundCloudIcon from '../assets/svg/soundcloud-brands.svg'
/* extend */
import '../lib/string.extend.ts'

const AboutMe: React.FC = () => {
  const [animatedIcon, setAnimatedIcon] = useState(false)
  const icon_size = 24

  const iconAnimation = (event: any) => {
    if (!animatedIcon) {
      setAnimatedIcon(true)
      event.target.style.animation = 'spin 800ms ease-in-out 0s 1 normal'
      setTimeout(() => {
        event.target.style.animation = ''
        setAnimatedIcon(false)
      }, 800);
    }
  }

  return (
    <>
      <Motion>
        <Elements
          className="fragments center"

          ref={() => {
            anime({
              targets: '.fragments .el',
              translateX: (el: HTMLElement) => {
                return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
              },
              translateY: (el: HTMLElement) => {
                return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
              },
              scale: () => {
                return 2
              },
              rotate: () => {
                return anime.random(-360, 360)
              },
              borderRadius: () => {
                return ['50%', anime.random(10, 35) + '%']
              },
              duration: () => {
                return anime.random(1400, 1800)
              },
              delay: () => {
                return anime.random(900, 1100)
              },
              opacity: (el: HTMLElement) => {
                return Number(el.getAttribute('data-opacity')) || 1
              },
            })
          }}

          style={{
            height: '100px',
            width: '100px',
          }}
        >
          <Element
            data-x="-200" data-y="-60" className="small circle el"
            style={
              {
                width: '14px',
                height: '14px',
                background: 'rgba(164, 255, 79)'
              }
            }
          />
          <Element
            data-x="200" data-y="190" className="small circle el"
            style={
              {
                width: '12px',
                height: '12px',
                background: 'rgba(79, 255, 164)'
              }
            }
          />
          <Element
            data-x="170" data-y="-260" className="small circle el"
            style={
              {
                width: '10px',
                height: '10px',
                background: 'rgba(255, 164, 79)'
              }
            }

            onClick={() => {
              console.log('ʕ•ٹ•ʔ', 'ﾈｺﾁｬﾝ...')
              Array(30).fill(null).map(() => {
                const cat = document.createElement('div')
                cat.innerText = '🐱😺😼🙀😹😻😿'.random_unicode()

                cat.style.fontSize = `${18 + Math.random() * 15}px`
                cat.style.position = 'absolute'
                cat.style.left = `${Math.random() * innerWidth}px`
                cat.style.top = '-50px'

                const easing = 'cubic-bezier(0.37, 0.02, 1, -0.02)'
                const duration = 0.4 + Math.random() * 1.2
                const delay = Math.random() * 0.4
                cat.style.animation = `fall ${duration}s ${easing} ${delay}s 1 normal both`
                document.body.appendChild(cat)

                setTimeout(() => {
                  document.body.removeChild(cat)
                }, (delay + duration) * 1000)
              })
            }}
          />
        </Elements>

        <Elements
          className="star center"

          ref={() => {
            anime({
              targets: '.star .el',
              translateX: function(el: HTMLElement) {
                return Number(el.getAttribute('data-x')) + anime.random(-20, 30)
              },
              translateY: function(el: HTMLElement) {
                return Number(el.getAttribute('data-y')) + anime.random(-50, 50)
              },
              duration: function() {
                return anime.random(1800, 2600)
              },
              delay: function() {
                return anime.random(1200, 1300)
              },
              borderRadius: 100,
              opacity: 0.2,
              scale: 3,
            })
          }}
        >
          {
            Array(28).fill(null).map((_, id) => {
              const x = (200 + Math.random() * 450) * (Math.random() < .5 ? 1 : -1)
              const y = (150 + Math.random() * 350) * (Math.random() < .5 ? 1 : -1)

              return (
                <Element
                  key={id} data-x={x} data-y={y} className="small circle el"
                  style={
                    {
                      opacity: '0',
                      width: '1px',
                      height: '1px',
                      background: 'rgba(244, 244, 244, 10)'
                    }
                  }
                />
              )
            })
          }
        </Elements>
      </Motion>

      <Contents>
        <div style={{
          textAlign: 'center',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}>
          <StyledImg
            src={Icon}
            onClick={(event) => {
              iconAnimation(event);
            }}
            ref={(ref) => {
              anime({
                targets: ref,
                opacity: 1,
                translateY: 150,
                easing: 'spring(1, 80, 10, 0)',
                delay: 800,
                duration: 400,
              })
            }}
          />

          <Player
            keepLastFrame={true}
            background="transparent"
            src={TypographyMotion}
            style={{
              width: '400px',
              height: '400px',
              pointerEvents: 'none',
            }}
            ref={(ref) => {
              setTimeout(() => {
                if (ref === null) return null;
                ref!.play()
              }, 900)
            }}
          />

          <div
            ref={(ref) => {
              anime({
                targets: ref,
                opacity: 1,
                translateY: -160,
                easing: 'spring(1, 80, 10, 0)',
                delay: 990,
                duration: 400,
              })
            }}
          >
            <MotionText
              text="an engineer who likes cats"
              delay={1160}
              cooltime={30}
              fontSize={16}
            />
          </div>

          <div>
            <Link delay={1280} icon={<TwitterIcon style={{fontSize: `${icon_size - 6}px`}} />} text="Twitter" href="https://twitter.com/jpnykw" />
            <Link delay={1340} icon={<GitHubIcon style={{fontSize: `${icon_size - 6}px`}} />} text="GitHub" href="https://github.com/jpnykw" />
            <Link delay={1400} icon={<YouTubeIcon style={{fontSize: `${icon_size}px`}} />} text="YouTube" href="https://www.youtube.com/channel/UCmpA3l3QF0VI4nvNVADXoyg/featured" />
            <Link delay={1460} icon={<SoundCloudIcon width={`${icon_size}px`} />} text="SoundCloud" href="https://soundcloud.com/jpnykw" />
          </div>

          <Container
            className="text"

            ref={(ref) => {
              anime({
                targets: ref,
                opacity: 1,
                duration: 700,
                delay: 1700,
              })
              anime({
                targets: ref,
                opacity: 1,
                translateY: -120,
                easing: 'spring(1, 80, 10, 0)',
                delay: 700,
                duration: 500,
              })
            }}

            style={{
              marginTop: '120px',
              opacity: 0
            }}
          >
            <Tooltip title={'I love you (=^・^=) ♥'}>
              <a
                href={'https://ko-fi.com/G2G65CB5J'}
                target={'_blank'}
              >
                <img
                  style={{
                    border: '0px',
                    height: '36px',
                  }}
                  src={'https://cdn.ko-fi.com/cdn/kofi1.png?v=2'}
                  alt={'Buy Me a Coffee at ko-fi.com'}
                />
              </a>
            </Tooltip>
          </Container>
        </div>
      </Contents>
    </>
  )
}

export default AboutMe

/* naming */
const Elements = styled.div``

/* styling */
const Motion = styled.div`
  position: relative;
  top: ${innerHeight / 2}px;
`

const Element = styled.div`
  opacity: 0;
  cursor: pointer;
`

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const StyledImg = styled.img`
  width: 180px;
  position: relative;
  top: 0px;
  border-radius: 90px;
  opacity: 0;
  cursor: pointer;
`

