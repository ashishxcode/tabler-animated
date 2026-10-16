"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5v13.982a2 2 0 0 0 4 0v-13.982a2 2 0 1 0 -4 0"}],["path",{"d":"M6.63 8.407a2.125 2.125 0 0 0 -.074 2.944c.77 .834 2.051 .869 2.862 .077l4.95 -4.834c.812 -.792 .846 -2.11 .076 -2.945a1.984 1.984 0 0 0 -2.861 -.077l-4.953 4.835"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[10.5,11.99],"a":0.1}];

export const BrandGoogleOneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGoogleOneIcon.displayName = "BrandGoogleOneIcon";
