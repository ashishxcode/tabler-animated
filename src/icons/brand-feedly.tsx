"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.833 12.278l4.445 -4.445"}],["path",{"d":"M10.055 14.5l2.223 -2.222"}],["path",{"d":"M12.278 16.722l.555 -.555"}],["path",{"d":"M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandFeedlyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandFeedlyIcon.displayName = "BrandFeedlyIcon";
