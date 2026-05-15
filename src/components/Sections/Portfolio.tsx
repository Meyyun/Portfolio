import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import Image, {StaticImageData} from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-10">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <ProjectCard index={index} item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ProjectCard: FC<{item: PortfolioItem; index: number}> = memo(({item}) => {
  const {title, description, url, image, tags} = item;
  const isExternal = typeof image === 'string';

  return (
    <a
      className="group flex flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
      href={url}
      rel="noreferrer"
      target="_blank">
      <div className="relative h-48 w-full overflow-hidden">
        {isExternal ? (
          <img
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image as string}
          />
        ) : (
          <Image
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            placeholder="blur"
            src={image as StaticImageData}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-y-3 p-5">
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="font-bold text-white text-base leading-tight">{title}</h3>
          <ArrowTopRightOnSquareIcon className="h-4 w-4 shrink-0 text-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {tags.map(tag => (
              <span
                className="rounded-full bg-neutral-700 px-2.5 py-0.5 text-xs font-medium text-neutral-300"
                key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
});

ProjectCard.displayName = 'ProjectCard';
