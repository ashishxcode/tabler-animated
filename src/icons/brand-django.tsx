"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"}],["path",{"d":"M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201"}],["path",{"d":"M16 7v.01"}],["path",{"d":"M16 10v5.586c0 .905 -.36 1.774 -1 2.414"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandDjangoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDjangoIcon.displayName = "BrandDjangoIcon";
