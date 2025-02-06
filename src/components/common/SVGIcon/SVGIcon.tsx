import { memo, Suspense } from 'react';
import { ISVGIconProps, TagType } from './interfaces';
import { IconMap } from './helper';

const SVGIcon = (props: ISVGIconProps) => {
  const { iconName, className, useDiv, style = {}, ...rest } = props;

  const Icon = IconMap?.[iconName];

  const ContainerType: TagType = useDiv ? 'div' : 'span';

  const WrappedIcon = () =>
    className ? (
      <ContainerType style={style} className={className}>
        <Icon
          {...{
            ...rest,
            width: typeof rest.width === 'string' ? parseInt(rest.width, 10) : rest.width,
            height: typeof rest.height === 'string' ? parseInt(rest.height, 10) : rest.height,
          }}
          className={className}
        />
      </ContainerType>
    ) : (
      <Icon
        {...{
          ...rest,
          width: typeof rest.width === 'string' ? parseInt(rest.width, 10) : rest.width,
          height: typeof rest.height === 'string' ? parseInt(rest.height, 10) : rest.height,
        }}
        className={className}
      />
    );

  return (
    <Suspense fallback={<></>}>
      <WrappedIcon />
    </Suspense>
  );
};

export default memo(SVGIcon);
