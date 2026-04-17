'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, Wind, Droplets, Leaf, Thermometer, Star, ShieldCheck, RotateCcw, Truck, Zap } from 'lucide-react'
import { useProducts } from '@/hooks/use-products'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=80'
const AMBIENT_IMAGE = 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=80'

const features = [
  {
    icon: Droplets,
    title: '초음파 무소음',
    desc: '30dB 이하 초저소음으로 숙면을 방해하지 않습니다',
  },
  {
    icon: Wind,
    title: '360° 미스트 분사',
    desc: '공간 전체를 균일하게 채우는 전방위 분사 시스템',
  },
  {
    icon: Leaf,
    title: '아로마 디퓨저 겸용',
    desc: '에센셜 오일 트레이로 향기와 습도를 동시에',
  },
  {
    icon: Thermometer,
    title: '스마트 습도 센서',
    desc: '최적 습도(40–60%) 자동 유지, 과가습 방지',
  },
]

const testimonials = [
  {
    name: '김지연',
    location: '서울 강남',
    rating: 5,
    text: '아이 방에 두고 쓰는데 소음이 거의 없어서 정말 만족해요. 아침에 일어나면 피부도 촉촉하고 콧속도 편해졌어요.',
  },
  {
    name: '이민준',
    location: '부산',
    rating: 5,
    text: '디자인이 너무 예뻐서 인테리어 소품으로도 손색이 없어요. 책상 위에 올려두니 분위기 자체가 달라졌습니다.',
  },
  {
    name: '박소현',
    location: '수원',
    rating: 5,
    text: '겨울 건조함에 고생했는데 이 제품 쓰고 나서 정전기, 코막힘 다 해결됐어요. 가격 대비 최고입니다.',
  },
]

export default function HomePage() {
  const { data: products } = useProducts({ limit: 4 })
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [stockCount, setStockCount] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setStockCount((prev) => {
        if (prev <= 20) return prev
        return prev - Math.floor(Math.random() * 2)
      })
    }, 45000)
    return () => clearInterval(timer)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden mist-gradient min-h-[85vh] flex items-center">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(196,60%,80%)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[hsl(200,40%,85%)] blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full px-4 py-1.5">
                <div className="w-2 h-2 rounded-full bg-[hsl(196,60%,42%)] animate-pulse" />
                <span className="text-xs font-medium text-[hsl(210,25%,20%)] tracking-wide uppercase">
                  재고 {stockCount}개 남음
                </span>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[hsl(196,60%,42%)] mb-3 font-medium">
                  Premium Humidifier
                </p>
                <h1 className="font-heading text-5xl lg:text-7xl text-[hsl(210,25%,12%)] leading-[1.05] mb-6">
                  공기부터<br />
                  <span className="text-[hsl(196,60%,42%)]">달라집니다</span>
                </h1>
                <p className="text-lg text-[hsl(210,10%,45%)] max-w-md leading-relaxed">
                  Misty 가습기 하나로 건조함, 피부 트러블, 수면 불편함을 한 번에 해결하세요.
                  조용하고 아름답게, 당신의 공간을 채웁니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[hsl(210,25%,12%)] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  지금 구매하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-[hsl(210,25%,12%)] text-[hsl(210,25%,12%)] px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-[hsl(210,25%,12%)] hover:text-white transition-colors"
                >
                  브랜드 스토리
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4 border-t border-[hsl(200,15%,87%)]">
                <div>
                  <p className="text-2xl font-heading font-semibold text-[hsl(210,25%,12%)]">12H+</p>
                  <p className="text-xs text-[hsl(210,10%,48%)] mt-0.5">연속 운전</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-semibold text-[hsl(210,25%,12%)]">30dB</p>
                  <p className="text-xs text-[hsl(210,10%,48%)] mt-0.5">초저소음</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-semibold text-[hsl(210,25%,12%)]">30㎡</p>
                  <p className="text-xs text-[hsl(210,10%,48%)] mt-0.5">적용 면적</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Misty 프리미엄 가습기"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,25%,12%)]/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-[hsl(200,15%,87%)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(196,60%,95%)] flex items-center justify-center">
                    <Zap className="h-5 w-5 text-[hsl(196,60%,42%)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[hsl(210,25%,12%)]">자동 습도 조절</p>
                    <p className="text-xs text-[hsl(210,10%,48%)]">스마트 센서 탑재</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[hsl(196,60%,42%)] text-white rounded-xl p-4 shadow-xl">
                <p className="text-xs font-semibold">무료배송</p>
                <p className="text-lg font-heading font-semibold">전국</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-5 bg-[hsl(210,25%,12%)] text-white">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-[hsl(196,60%,65%)]" strokeWidth={1.5} />
              <span className="text-sm font-medium">전국 무료배송</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[hsl(196,60%,65%)]" strokeWidth={1.5} />
              <span className="text-sm font-medium">1년 무상 A/S</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-[hsl(196,60%,65%)]" strokeWidth={1.5} />
              <span className="text-sm font-medium">30일 무조건 환불</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-[hsl(196,60%,65%)]" strokeWidth={1.5} />
              <span className="text-sm font-medium">4.9점 고객 만족</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[hsl(196,60%,42%)] mb-3 font-medium">Why Misty</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-[hsl(210,25%,12%)] mb-5">
              다른 가습기와<br />무엇이 다를까요?
            </h2>
            <p className="text-[hsl(210,10%,45%)] leading-relaxed">
              수십 가지 가습기를 비교 분석한 끝에, 진짜 필요한 기능만 담았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-[hsl(200,20%,98%)] border border-[hsl(200,15%,90%)] hover:border-[hsl(196,60%,70%)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[hsl(196,60%,95%)] flex items-center justify-center mb-5 group-hover:bg-[hsl(196,60%,42%)] transition-colors">
                    <Icon className="h-6 w-6 text-[hsl(196,60%,42%)] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-[hsl(210,25%,12%)] mb-2">{f.title}</h3>
                  <p className="text-sm text-[hsl(210,10%,48%)] leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {products && products.length > 0 && (
        <section className="py-24 mist-gradient">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[hsl(196,60%,42%)] mb-2 font-medium">Products</p>
                <h2 className="font-heading text-4xl text-[hsl(210,25%,12%)]">인기 제품</h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[hsl(196,60%,42%)] hover:gap-4 transition-all"
              >
                전체보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product: any) => (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[hsl(200,15%,90%)] hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square bg-[hsl(200,20%,96%)] overflow-hidden">
                    {product.thumbnail ? (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Droplets className="h-16 w-16 text-[hsl(200,15%,80%)]" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[hsl(210,25%,12%)] mb-1 group-hover:text-[hsl(196,60%,42%)] transition-colors">
                      {product.title}
                    </h3>
                    {product.variants?.[0]?.calculated_price?.calculated_amount != null && (
                      <p className="text-sm text-[hsl(196,60%,42%)] font-semibold">
                        ₩{(product.variants[0].calculated_price.calculated_amount).toLocaleString('ko-KR')}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10 sm:hidden">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[hsl(210,25%,12%)] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                전체 제품 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lifestyle / Brand Story Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={LIFESTYLE_IMAGE}
                  alt="Misty 라이프스타일"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute top-8 -right-6 bg-white rounded-xl shadow-xl p-5 border border-[hsl(200,15%,87%)]">
                <p className="text-3xl font-heading font-semibold text-[hsl(210,25%,12%)]">98%</p>
                <p className="text-xs text-[hsl(210,10%,48%)] mt-1">재구매 의향</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[hsl(196,60%,42%)] mb-3 font-medium">Our Story</p>
                <h2 className="font-heading text-4xl lg:text-5xl text-[hsl(210,25%,12%)] mb-6 leading-tight">
                  더 잘 자고,<br />더 맑게 숨쉬고,<br />더 건강하게
                </h2>
                <p className="text-[hsl(210,10%,45%)] leading-relaxed mb-4">
                  Misty는 "집에서의 공기 질이 삶의 질을 결정한다"는 믿음에서 시작되었습니다.
                  수면 중 건조함, 겨울철 피부 당김, 코 막힘 — 이 모든 불편함이 사실 가습기 하나로 해결됩니다.
                </p>
                <p className="text-[hsl(210,10%,45%)] leading-relaxed">
                  우리는 병원급 습도 제어 기술과 스칸디나비안 미니멀 디자인을 결합해,
                  기능과 아름다움을 동시에 담은 제품을 만들었습니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[hsl(200,20%,97%)] border border-[hsl(200,15%,90%)]">
                  <p className="text-2xl font-heading font-semibold text-[hsl(210,25%,12%)]">5,000+</p>
                  <p className="text-xs text-[hsl(210,10%,48%)] mt-1">만족한 고객</p>
                </div>
                <div className="p-4 rounded-xl bg-[hsl(200,20%,97%)] border border-[hsl(200,15%,90%)]">
                  <p className="text-2xl font-heading font-semibold text-[hsl(210,25%,12%)]">4.9 / 5</p>
                  <p className="text-xs text-[hsl(210,10%,48%)] mt-1">평균 평점</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[hsl(196,60%,42%)] link-underline pb-0.5"
              >
                브랜드 스토리 읽기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[hsl(210,25%,12%)] text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[hsl(196,60%,65%)] mb-3 font-medium">고객 후기</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-white">
              실제 사용자들의<br />솔직한 후기
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[hsl(196,60%,42%)] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Image Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={AMBIENT_IMAGE}
          alt="Misty 앰비언트"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(210,25%,12%)]/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[hsl(196,60%,75%)] font-medium">Limited Edition</p>
            <h2 className="font-heading text-4xl lg:text-6xl text-white">
              당신의 공간을<br />변화시킬 준비가 됐나요?
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-[hsl(210,25%,12%)] px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-[hsl(196,60%,42%)] hover:text-white transition-colors"
            >
              지금 시작하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[hsl(196,60%,42%)] mb-3 font-medium">Newsletter</p>
          <h2 className="font-heading text-3xl text-[hsl(210,25%,12%)] mb-3">먼저 알아보세요</h2>
          <p className="text-[hsl(210,10%,45%)] mb-8 text-sm">
            신제품 출시, 시즌 할인, 케어 팁을 가장 먼저 받아보세요.
          </p>
          {submitted ? (
            <div className="bg-[hsl(196,60%,95%)] border border-[hsl(196,60%,70%)] rounded-xl p-6">
              <p className="text-[hsl(196,60%,35%)] font-semibold">구독해 주셔서 감사합니다!</p>
              <p className="text-[hsl(196,60%,42%)] text-sm mt-1">첫 구매 10% 할인 코드를 이메일로 보내드렸습니다.</p>
            </div>
          ) : (
            <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 border border-[hsl(200,15%,87%)] bg-[hsl(200,20%,98%)] rounded-lg px-4 py-3 text-sm placeholder:text-[hsl(210,10%,65%)] focus:border-[hsl(196,60%,42%)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[hsl(210,25%,12%)] text-white px-6 py-3 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                구독하기
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
