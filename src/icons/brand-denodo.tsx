"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 11h2v2h-2l0 -2"}],["path",{"d":"M3.634 15.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732"}],["path",{"d":"M11 19h2v2h-2l0 -2"}],["path",{"d":"M18.634 14.634l1.732 1l-1 1.732l-1.732 -1l1 -1.732"}],["path",{"d":"M17.634 7.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732"}],["path",{"d":"M11 3h2v2h-2l0 -2"}],["path",{"d":"M3.634 8.366l1 -1.732l1.732 1l-1 1.732l-1.732 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12],"a":0.1}];

export const BrandDenodoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDenodoIcon.displayName = "BrandDenodoIcon";
