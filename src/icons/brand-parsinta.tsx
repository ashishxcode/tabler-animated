"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a9 9 0 1 0 9 9"}],["path",{"d":"M21 12a9 9 0 0 0 -9 -9","opacity":".5"}],["path",{"d":"M10 9v6l5 -3l-5 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandParsintaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandParsintaIcon.displayName = "BrandParsintaIcon";
