"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.876 13.61a4 4 0 1 0 6.124 3.39h6"}],["path",{"d":"M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5"}],["path",{"d":"M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12.5],"st":0.1}];

export const WebhookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WebhookIcon.displayName = "WebhookIcon";
