"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 6h6v12h-2l-2 2l-1 -2h-1l0 -12"}],["path",{"d":"M4 12h6.5"}],["path",{"d":"M10.5 6h-5"}],["path",{"d":"M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5"}],["path",{"d":"M8 6v7c0 4.5 -2 5.5 -4 7"}],["path",{"d":"M11 18l-3 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[11.75,12],"a":0.1}];

export const BrandZhihuIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandZhihuIcon.displayName = "BrandZhihuIcon";
