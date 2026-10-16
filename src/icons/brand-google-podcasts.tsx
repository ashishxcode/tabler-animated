"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v2"}],["path",{"d":"M12 19v2"}],["path",{"d":"M12 8v8"}],["path",{"d":"M8 17v2"}],["path",{"d":"M4 11v2"}],["path",{"d":"M20 11v2"}],["path",{"d":"M8 5v8"}],["path",{"d":"M16 7v-2"}],["path",{"d":"M16 19v-8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"a":0.1}];

export const BrandGooglePodcastsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGooglePodcastsIcon.displayName = "BrandGooglePodcastsIcon";
