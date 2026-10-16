"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6l5 0"}],["path",{"d":"M7 18l7 0"}],["path",{"d":"M4.5 6l5.5 7v5"}],["path",{"d":"M10 13l6 -5"}],["path",{"d":"M12.5 8l5 0"}],["path",{"d":"M20 11l0 4"}],["path",{"d":"M20 18l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[11.5,12.01],"a":0.1}];

export const BrandYahooIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandYahooIcon.displayName = "BrandYahooIcon";
