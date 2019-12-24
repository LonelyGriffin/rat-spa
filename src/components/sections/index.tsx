import React, {ComponentType} from "react";

export type SectionProps = {
  onPrev?: () => void
  onNext?: () => void
}

export type SectionType = ComponentType<SectionProps>

type Props = {
  sections: Array<SectionType>
  sectionIndex: number
  onPrev?: () => void
  onNext?: () => void
}

export const Sections = (props: Props) => {
  const CurrentSection = props.sections[props.sectionIndex] || null;

  return (
    <CurrentSection
      onNext={props.onNext}
      onPrev={props.onPrev}
    />
  );
};
