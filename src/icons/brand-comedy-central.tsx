"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.343 17.657a8 8 0 1 0 0 -11.314"}],["path",{"d":"M13.828 9.172a4 4 0 1 0 0 5.656"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.17,12],"a":0.1}];

export const BrandComedyCentralIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandComedyCentralIcon.displayName = "BrandComedyCentralIcon";
