"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 17.5v-6.5h.5l4 6h.5v-6.5"}],["path",{"d":"M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997"}],["path",{"d":"M4.5 5.5l2.5 2.5"}],["path",{"d":"M20 7l-13 1v12.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12.5],"a":0.1}];

export const BrandNotionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandNotionIcon.displayName = "BrandNotionIcon";
