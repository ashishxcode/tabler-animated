"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10l-6 10l-3 -5l6 -10l3 5"}],["path",{"d":"M9 15h12l-3 5h-12"}],["path",{"d":"M15 15l-6 -10h6l6 10l-6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.5],"a":0.1}];

export const BrandGoogleDriveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGoogleDriveIcon.displayName = "BrandGoogleDriveIcon";
