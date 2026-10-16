"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01"}],["path",{"d":"M10.5 8l-.5 -1"}],["path",{"d":"M13.5 14l.5 1"}],["path",{"d":"M9 12.5l-1 .5"}],["path",{"d":"M11 14l-.5 1"}],["path",{"d":"M13 8l.5 -1"}],["path",{"d":"M16 12.5l-1 -.5"}],["path",{"d":"M9 10l-1 -.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[11.99,11.98],"a":0.1}];

export const BrandCucumberIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCucumberIcon.displayName = "BrandCucumberIcon";
