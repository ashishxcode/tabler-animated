"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5"}],["path",{"d":"M5.5 11.5l5 -5"}],["path",{"d":"M21 12l-9 9"}],["path",{"d":"M21 12v4"}],["path",{"d":"M21 12h-4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[11.99,12.49],"d":[2.4,0],"st":0.06}];

export const TextOrientationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextOrientationIcon.displayName = "TextOrientationIcon";
