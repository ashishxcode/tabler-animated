"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 13h6"}],["path",{"d":"M4 12c0 -9.296 9.5 -9 9.5 -9c-2.808 0 -4.5 4.373 -4.5 9s1.763 8.976 4.572 8.976c0 .023 -9.572 1.092 -9.572 -8.976"}],["path",{"d":"M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5"}],["path",{"d":"M15 13v8s2.77 -.37 4 -2v-6"}],["path",{"d":"M13.5 21h1.5"}],["path",{"d":"M13.5 3h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12.01],"a":0.1}];

export const BrandGuardianIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGuardianIcon.displayName = "BrandGuardianIcon";
