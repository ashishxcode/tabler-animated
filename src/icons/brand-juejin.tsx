"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12l10 7.422l10 -7.422"}],["path",{"d":"M7 9l5 4l5 -4"}],["path",{"d":"M11 6l1 .8l1 -.8l-1 -.8l-1 .8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.31],"a":0.1}];

export const BrandJuejinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandJuejinIcon.displayName = "BrandJuejinIcon";
