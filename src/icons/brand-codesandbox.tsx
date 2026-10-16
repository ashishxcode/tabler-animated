"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25"}],["path",{"d":"M12 12l4 -2.25l4 -2.25"}],["path",{"d":"M12 12l0 9"}],["path",{"d":"M12 12l-4 -2.25l-4 -2.25"}],["path",{"d":"M20 12l-4 2v4.75"}],["path",{"d":"M4 12l4 2l0 4.75"}],["path",{"d":"M8 5.25l4 2.25l4 -2.25"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12],"a":0.1}];

export const BrandCodesandboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCodesandboxIcon.displayName = "BrandCodesandboxIcon";
