"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.73 19.875a2.225 2.225 0 0 1 -1.948 1.125h-7.283a2.222 2.222 0 0 1 -1.947 -1.158l-4.272 -6.75a2.269 2.269 0 0 1 0 -2.184l4.272 -6.75a2.225 2.225 0 0 1 1.946 -1.158h7.285c.809 0 1.554 .443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75v-.033"}],["path",{"d":"M8 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M14 14l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandGoogleBigQueryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGoogleBigQueryIcon.displayName = "BrandGoogleBigQueryIcon";
