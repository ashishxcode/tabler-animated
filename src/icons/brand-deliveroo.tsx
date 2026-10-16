"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1l2 7.5"}],["path",{"d":"M14.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}],["path",{"d":"M10.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandDeliverooIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDeliverooIcon.displayName = "BrandDeliverooIcon";
