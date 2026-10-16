"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.79 3a.9 .9 0 0 1 .742 .403a16.2 16.2 0 0 1 0 17.194a.9 .9 0 0 1 -.742 .403h-2.58a.9 .9 0 0 1 -.74 -.403a16.2 16.2 0 0 1 0 -17.194a.9 .9 0 0 1 .74 -.403h2.58"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,12],"a":0.12}];

export const LensConvexIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LensConvexIcon.displayName = "LensConvexIcon";
