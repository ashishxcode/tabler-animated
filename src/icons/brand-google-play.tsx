"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607l0 -.001"}],["path",{"d":"M15 9l-10.5 11.5"}],["path",{"d":"M4.5 3.5l10.5 11.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.97,12],"d":[1.8,0]}];

export const BrandGooglePlayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGooglePlayIcon.displayName = "BrandGooglePlayIcon";
