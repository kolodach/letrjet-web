import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon, LayoutDashboard } from 'lucide-react';

import {
  CtaButton,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureShowcaseIconContainer,
  Hero,
  Pill,
} from '@kit/ui/marketing';
import { Trans } from '@kit/ui/trans';

import { withI18n } from '~/lib/i18n/with-i18n';

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-14'}>
      <div className={'container mx-auto'}>
        <Hero
          title={
            <>
              <span>Newsletter automation</span>
              <span>at jet speed</span>
            </>
          }
          subtitle={
            <span>
              Transform your content ideas into polished newsletters without
              lifting a finger. Letrjet is the first{' '}
              <u>
                <b>AI-first</b>
              </u>{' '}
              newsletter platform that truly automates your entire workflow
              while keeping you in control.
            </span>
          }
          cta={<MainCallToActionButton />}
          image={
            <Image
              priority
              className={
                'rounded-2xl border border-gray-200 dark:border-primary/10'
              }
              width={3558}
              height={2222}
              src={`/images/dashboard.webp`}
              alt={`App Image`}
            />
          }
        />
      </div>

      <div className={'container mx-auto'}>
        <div
          className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
        >
          <FeatureShowcase
            heading={
              <>
                <b className="font-semibold dark:text-white">
                  The ultimate SaaS Starter Kit
                </b>
                .{' '}
                <span className="font-normal text-muted-foreground">
                  Unleash your creativity and build your SaaS faster than ever
                  with Makerkit.
                </span>
              </>
            }
            icon={
              <FeatureShowcaseIconContainer>
                <LayoutDashboard className="h-5" />
                <span>All-in-one solution</span>
              </FeatureShowcaseIconContainer>
            }
          >
            <FeatureGrid>
              <FeatureCard
                className={'relative col-span-2 overflow-hidden lg:h-96'}
                label={'Beautiful Dashboard'}
                description={`Makerkit provides a beautiful dashboard to manage your SaaS business.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border border-border lg:top-36 lg:flex lg:h-auto lg:w-10/12"
                  src={'/images/dashboard-header.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Dashboard Header'}
                />
              </FeatureCard>

              <FeatureCard
                className={
                  'relative col-span-2 w-full overflow-hidden lg:col-span-1'
                }
                label={'Authentication'}
                description={`Makerkit provides a variety of providers to allow your users to sign in.`}
              >
                <Image
                  className="absolute left-16 top-32 hidden h-auto w-8/12 rounded-l-2xl lg:flex"
                  src={'/images/sign-in.webp'}
                  width={'1760'}
                  height={'1680'}
                  alt={'Sign In'}
                />
              </FeatureCard>

              <FeatureCard
                className={
                  'relative col-span-2 overflow-hidden lg:col-span-1 lg:h-96'
                }
                label={'Multi Tenancy'}
                description={`Multi tenant memberships for your SaaS business.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border lg:top-28 lg:flex lg:h-auto lg:w-8/12"
                  src={'/images/multi-tenancy.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Multi Tenancy'}
                />
              </FeatureCard>

              <FeatureCard
                className={'relative col-span-2 overflow-hidden lg:h-96'}
                label={'Billing'}
                description={`Makerkit supports multiple payment gateways to charge your customers.`}
              >
                <Image
                  className="absolute right-0 top-0 hidden h-full w-full rounded-tl-2xl border border-border lg:top-36 lg:flex lg:h-auto lg:w-11/12"
                  src={'/images/billing.webp'}
                  width={'2061'}
                  height={'800'}
                  alt={'Billing'}
                />
              </FeatureCard>
            </FeatureGrid>
          </FeatureShowcase>
        </div>
      </div>
    </div>
  );
}

export default withI18n(Home);

function MainCallToActionButton() {
  return (
    <div className={'flex space-x-4'}>
      <CtaButton>
        <Link href={'/auth/sign-up'}>
          <span className={'flex items-center space-x-0.5'}>
            <span>
              <Trans i18nKey={'common:getStarted'} />
            </span>

            <ArrowRightIcon
              className={
                'h-4 animate-in fade-in slide-in-from-left-8' +
                ' delay-1000 duration-1000 zoom-in fill-mode-both'
              }
            />
          </span>
        </Link>
      </CtaButton>
    </div>
  );
}
