"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 22l-5 -19l19 5.5l-14 13.5"}],["path",{"d":"M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64"}],["path",{"d":"M12.573 17.58l-1.573 -6.58l6.13 2.179"}],["path",{"d":"M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12.5,12.5],"a":0.1}];

export const BrandThreejsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandThreejsIcon.displayName = "BrandThreejsIcon";
